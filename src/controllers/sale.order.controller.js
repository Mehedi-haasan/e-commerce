const db = require("../models");
const Op = db.Sequelize.Op;

const ProductVariant = db.productVariant;
const SaleOrder = db.saleOrder;
const SaleOrderLine = db.saleOrderLine;

exports.getOrders = async (req, res) => {
    try {
        const result = await SaleOrder.findAll({
            where: {
                active: true,
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
    if (!body.order_id && !body.product_id && !body.product_qty) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

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

    SaleOrderLine.create(body)
        .then(_ => {
            res.send({
                success: true,
                message: "Record created successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};


exports.updateCartItem = async (req, res) => {
    const body = req.body;
    if (!body.line_id && !body.product_qty) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    const orderLine = await SaleOrderLine.findOne({
        where: {
            id: body.line_id,
            user_id: req.userId
        }
    })

    if (!orderLine) {
        return res.status(204).send({
            success: false,
            message: "Order line not found."
        });
    }

    var values = {
        product_qty: body.product_qty,
        subtotal: orderLine.price_unit * body.product_qty
    }
    if (body.custom_values) {
        values.custom_values = body.custom_values;
    }

    SaleOrderLine.update(values, {
        where: {
            id: body.line_id,
            user_id: req.userId
        }
    })
        .then(_ => {
            res.send({
                success: true,
                message: "Record updated successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
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