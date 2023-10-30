const db = require("../models");
const Op = db.Sequelize.Op;

const ProductVariant = db.productVariant;
const SaleOrder = db.saleOrder;
const SaleOrderLine = db.saleOrderLine;

exports.getOrders = async (req, res) => {
    try {
        const result = await SaleOrder.findAll({
            where: {
                user_id: req.userId,
                status: {
                    [Op.or]: ["draft", "confirmed", "done"]
                }
            }
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
    try {
        var orderId = await SaleOrder.findOne({
            where: {
                user_id: req.userId,
                status: 'cart'
            }
        });

        if (!orderId) {
            orderId = await SaleOrder.create({
                user_id: req.userId,
                status: "cart"
            });
        }

        const orderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            }
        });

        return res.status(200).send({
            success: true,
            order: orderId,
            items: orderLines
        });
    } catch (err) {
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
            include: [{
                model: SaleOrderLine,
                where: {
                    variant_id: body.product_id
                }
            }]
        });
        
        if (!orderId) {
            orderId = await SaleOrder.create({
                user_id: req.userId,
                status: "cart"
            });
        }

        if(orderId.sale_order_lines.length > 0) {
            const orderLine = orderId.sale_order_lines[0];
            var values = {
                product_qty: orderLine.product_qty + body.product_qty,
                subtotal: orderLine.price_unit * (orderLine.product_qty + body.product_qty)
            }
            if (body.custom_values) {
                values.custom_values = body.custom_values;
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

        await SaleOrderLine.create(body);
        const orderLines = await SaleOrderLine.findAll({
            where: {
                order_id: orderId.id
            }
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

exports.placeOrder = async (req, res) => {

    try {
        const orderLine = await SaleOrder.findOne({
            where: {
                user_id: req.userId,
                status: 'cart'
            }
        })

        if (!orderLine) {
            return res.status(204).send({
                success: false,
                message: "Order not found."
            });
        }

        var values = {
            status: 'draft'
        }
        await orderLine.update(values);

    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};


exports.deleteCartItem = (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    Carousel.destroy({
        where: {
            id: body.id
        }
    })
        .then(_ => {
            res.send({
                success: true,
                message: "Record deleted successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};