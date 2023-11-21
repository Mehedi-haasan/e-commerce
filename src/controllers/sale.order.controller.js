const db = require("../models");
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const ProductVariant = db.productVariant;
const SaleOrder = db.saleOrder;
const User = db.user;
const SaleOrderLine = db.saleOrderLine;

exports.getOrders = async (req, res) => {
    try {
        const result = await SaleOrder.findAll({
            where: {
                user_id: req.userId,
                status: {
                    [Op.or]: ["draft", "confirmed", "done"]
                }
            },
            include: [{
                model: User,
                attributes: ['id', 'username', 'email'],
            }]
        });

        return res.status(200).send({
            success: true,
            items: result
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.getCartItems = async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
        var orderId = await SaleOrder.findOne({
            where: {
                user_id: req.userId,
                status: 'cart'
            },

        }, { transaction: transaction });

        if (!orderId) {
            orderId = await SaleOrder.create({
                user_id: req.userId,
                status: "cart"
            }, { transaction: transaction });
        }

        const orderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            },
            include: [{
                model: ProductVariant,
                attributes: ['id', 'name', 'price', 'image_url'],
            }]
        }, { transaction: transaction });

        const total = orderLines.reduce((a, b) => parseFloat(a) + parseFloat(b.subtotal), 0);
        const subtotal = total;
        const discount = 0;
        const delivery_charge = 0;
        const tax = 0;

        await orderId.update({
            total: total,
            subtotal: subtotal,
            discount: discount,
            delivery_charge: delivery_charge,
            tax: tax
        }, { transaction: transaction });

        const orderIdNew = await SaleOrder.findOne({
            where: {
                id: orderId.id
            }
        }, { transaction: transaction });

        // commit transaction
        await transaction.commit();

        return res.status(200).send({
            success: true,
            order: orderIdNew,
            items: orderLines
        });
    } catch (err) {
        await transaction.rollback();
        res.status(500).send({ success: false, message: err.message });
    }
};

function getProductVariant(id) {
    return ProductVariant.findOne({
        where: {
            id: id,
            active: true
        }
    });
}

exports.addCartItem = async (req, res) => {
    const body = req.body;
    if (!body.product_id && !body.product_qty) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {

        var orderId = await SaleOrder.findOne({
            where: {
                user_id: req.userId,
                status: 'cart'
            },
        });

        if (!orderId) {
            orderId = await SaleOrder.create({
                user_id: req.userId,
                status: "cart"
            });
        }
        const saleOrderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            }
        })

        if (saleOrderLines != undefined && saleOrderLines.length > 0) {
            const orderLine = saleOrderLines.find(p => p.variant_id === body.product_id);
            if (orderLine) {

                var values = {
                    product_qty: orderLine.product_qty + body.product_qty,
                    subtotal: orderLine.price_unit * (orderLine.product_qty + body.product_qty)
                }
                if (body.custom_values) {
                    values['custom_values'] = JSON.stringify(body.custom_values);
                    console.log(typeof values.custom_values)
                }

                await orderLine.update(values);
                const orderLines = await SaleOrderLine.findAll({
                    where: {
                        order_id: orderId.id
                    }
                });

                return res.send({
                    success: true,
                    message: "Record updated successfully!",
                    orderId: orderId.id,
                    items: orderLines,
                });

            }
        }

        body.order_id = orderId.id;

        const product = await getProductVariant(body.product_id);

        if (!product) {
            return res.status(204).send({
                success: false,
                message: "Product not found."
            });
        }

        body.variant_id = product.id;
        body.user_id = req.userId;
        body.name = product.name;
        body.price_unit = product.price;
        body.subtotal = product.price * body.product_qty;
        if (body.custom_values) {
            body.custom_values = JSON.stringify(body.custom_values)
        }

        await SaleOrderLine.create(body);
        const orderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            }
        });

        const total = orderLines.reduce((a, b) => parseFloat(a) + parseFloat(b.subtotal), 0);
        const subtotal = total;
        const discount = 0;
        const delivery_charge = 0;
        const tax = 0;

        await orderId.update({
            total: total,
            subtotal: subtotal,
            discount: discount,
            delivery_charge: delivery_charge,
            tax: tax
        });

        res.send({
            success: true,
            message: "Record created successfully!",
            orderId: orderId.id,
            items: orderLines,
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.updateCartItems = async (req, res) => {
    const body = req.body;
    if (body.length == 0) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    const transaction = await sequelize.transaction();

    try {

        var orderId = await SaleOrder.findOne({
            where: {
                user_id: req.userId,
                status: 'cart'
            },
        }, { transaction: transaction });

        if (!orderId) {
            orderId = await SaleOrder.create({
                user_id: req.userId,
                status: "cart"
            }, { transaction: transaction });
        }
        const saleOrderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            }
        }, { transaction: transaction })

        body.forEach(async (element) => {
            const product = await getProductVariant(element.product_id);
            if (!product) {
                return res.status(204).send({
                    success: false,
                    message: "Product not found."
                });
            }

            const orderLine = saleOrderLines.find(p => p.variant_id === element.product_id);
            if (orderLine) {
                await orderLine.update({
                    product_qty: element.product_qty,
                    subtotal: product.price * element.product_qty
                });
            }
        })

        const orderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            }
        }, { transaction: transaction });

        const total = orderLines.reduce((a, b) => parseFloat(a) + parseFloat(b.subtotal), 0);
        const subtotal = total;
        const discount = 0;
        const delivery_charge = 0;
        const tax = 0;

        await orderId.update({
            total: total,
            subtotal: subtotal,
            discount: discount,
            delivery_charge: delivery_charge,
            tax: tax
        }, { transaction: transaction });

        // commit transaction
        await transaction.commit();

        res.send({
            success: true,
            message: "Record created successfully!"
        });
    } catch (err) {
        await transaction.rollback();
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.placeOrder = async (req, res) => {
    const transaction = await sequelize.transaction();
    const body = req.body;
    if (!body.delivery_id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        const orderLine = await SaleOrder.findOne({
            where: {
                user_id: req.userId,
                status: 'cart'
            }
        }, { transaction: transaction })

        if (!orderLine) {
            return res.status(204).send({
                success: false,
                message: "Order not found."
            });
        }

        const orderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderLine.id
            }
        }, { transaction: transaction });

        if (!orderLines) {
            return res.status(204).send({
                success: false,
                message: "Order Items not found."
            });
        }

        const deliveryAddress = await UserAddress.findOne({
            where: {
                id: body.delivery_id
            }
        }, { transaction: transaction });

        const shippingAddress = await UserAddress.findOne({
            where: {
                id: body.shipping_id || body.delivery_id
            }
        }, { transaction: transaction });

        const total = orderLines.reduce((a, b) => parseFloat(a) + parseFloat(b.subtotal), 0);
        const subtotal = total;
        const discount = 0;
        const delivery_charge = shippingAddress.delivery_charge;
        const tax = 0;

        var values = {
            status: 'draft',
            total: total,
            subtotal: subtotal,
            discount: discount,
            delivery_charge: delivery_charge,
            tax: tax
        }

        await orderLine.update(values, { transaction: transaction });

        // commit transaction
        await transaction.commit();

        res.send({
            success: true,
            message: "Order successfully placed!",
            orderId: orderLine.id,
            items: orderLines,
        });

    } catch (err) {
        await transaction.rollback();
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.updateOrderStatus = async (req, res) => {
    const body = req.body;
    if (!body.id && !body.status) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    const transaction = await sequelize.transaction();

    try {
        const order = await SaleOrder.findOne({
            where: {
                id: body.id
            }
        }, { transaction: transaction });

        if (!order) {
            return res.status(204).send({
                success: false,
                message: "Order not found."
            });
        }

        await order.update({
            status: body.status
        }, { transaction: transaction });

        // commit transaction
        await transaction.commit();

        res.send({
            success: true,
            message: "Order status updated successfully!"
        });
    } catch (err) {
        await transaction.rollback();
        res.status(500).send({ success: false, message: err.message });
    }
};


exports.deleteCartItem = async (req, res) => {
    const body = req.body;
    console.log(body.id, 'Cart id')
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    const transaction = await sequelize.transaction();

    try {

        const orderLineId = await SaleOrderLine.findOne({
            where: {
                id: body.id
            }
        }, { transaction: transaction });

        if (!orderLineId) {
            return res.status(204).send({
                success: false,
                message: "Order Item not found."
            });
        }

        const orderId = await SaleOrder.findOne({
            where: {
                id: orderLineId.order_id
            }
        }, { transaction: transaction });

        await orderLineId.destroy({ transaction: transaction });

        const orderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            }
        }, { transaction: transaction });

        const total = orderLines.reduce((a, b) => parseFloat(a) + parseFloat(b.subtotal), 0);
        const subtotal = total;
        const discount = 0;
        const delivery_charge = 0;
        const tax = 0;

        await orderId.update({
            total: total,
            subtotal: subtotal,
            discount: discount,
            delivery_charge: delivery_charge,
            tax: tax
        }, { transaction: transaction });

        // commit transaction
        await transaction.commit();

        res.send({
            success: true,
            message: "Record deleted successfully!"
        });
    } catch (err) {
        await transaction.rollback();
        res.status(500).send({ success: false, message: err.message });
    }
};