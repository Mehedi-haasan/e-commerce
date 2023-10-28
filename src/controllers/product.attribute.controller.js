const db = require("../models");
const ProductAttribute = db.productAttribute;
const ProductAttributeValue = db.productAttributeValue;


exports.getProductAttributeValues = async (req, res) => {

    try {
        const result = await ProductAttribute.findAll({
            where: {
                active: true
            },
            include: [ProductAttributeValue],
        });

        if (!result) {
            return res.status(200).send({
                success: true,
                message: "No record found."
            });
        }

        var items = [];
        for (let i = 0; i < result.length; i++) {
            const item = result[i];
            const attrValues = item['product_attribute_values'];

            items.push({
                id: item.id,
                name: item.name,
                displayType: item.display_type,
                attrValues: attrValues.map(attrValue => {
                    return {
                        id: attrValue.id,
                        value: attrValue.value,
                    }
                })
            });
        }

        res.status(200).send({ success: true, items: items });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.createProductAttributeValue = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.display_type) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    const attrValues = {
        active: req.body.active || true,
        name: body.name,
        display_type: body.display_type,
    }

    try {
        const attrId = await ProductAttribute.create(attrValues);
        if (body.attr_values) {
            await ProductAttributeValue.bulkCreate(body.attr_values.map(attrValue => {
                return {
                    active: attrValue.active || true,
                    attr_id: attrId.id,
                    value: attrValue.value,
                }
            }));
        }

        res.send({
            success: true,
            message: "Record created successfully!"
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.updateProductAttribute = async (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    var values = {};
    if (body.active) {
        values.active = body.active;
    }
    if (body.name) {
        values.name = body.name;
    }
    if (body.display_type) {
        values.display_type = body.display_type;
    }

    try {
        await ProductAttribute.update(values, {
            where: {
                id: body.id
            }
        });

        res.send({
            success: true,
            message: "Record updated successfully!"
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};


exports.updateProductAttributeValue = async (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    var values = {};
    if (body.active) {
        values.active = body.active;
    }
    if (body.value) {
        values.value = body.value;
    }

    try {
        await ProductAttributeValue.update(values, {
            where: {
                id: body.id
            }
        });

        res.send({
            success: true,
            message: "Record updated successfully!"
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};


exports.deleteProductAttribute = async (req, res) => {
    try {
        await ProductAttribute.destroy({
            where: {
                id: req.params.attributeId
            }
        });
        res.send({
            success: true,
            message: "Record deleted successfully!"
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.deleteProductAttributeValue = async (req, res) => {
    try {
        await ProductAttributeValue.destroy({
            where: {
                id: req.params.attributeValueId
            }
        });
        res.send({
            success: true,
            message: "Record deleted successfully!"
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};