const db = require("../models");
const ProductCategory = db.productCategory;
const ProductTemplate = db.productTemplate;


exports.getProductCategories = async (req, res) => {

    try {
        const result = await ProductCategory.findAll({
            where: {
                active: true
            }
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
            items.push({
                id: item.id,
                name: item.name,
                imageUrl: item.image_url,
            });
        }

        res.status(200).send({ success: true, items: items });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.getProductByCategories = async (req, res) => {

    try {
        const result = await ProductCategory.findAll({
            where: {
                active: true
            },
            include: [ProductTemplate],
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
            items.push({
                id: item.id,
                name: item.name,
                imageUrl: item.image_url,
                products: item.product_templates.map((templateItem) => {
                    return {
                        id: templateItem.id,
                        name: templateItem.name,
                        rating: 5,
                        stockStatus: 'available',
                        sequence: templateItem.sequence,
                        imageUrl: templateItem.image_url,
                        sku: templateItem.sku,
                        price: templateItem.price,
                    }
                }),
            });
        }

        res.status(200).send({ success: true, items: items });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.createProductCategory = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.image_url) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        await ProductCategory.create({
            active: req.body.active || true,
            name: req.body.name,
            image_url: req.body.image_url,
        });

        res.send({
            success: true,
            message: "Record created successfully!"
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.updateProductCategory = async (req, res) => {
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
    if (body.image_url) {
        values.image_url = body.image_url;
    }

    try {
        await ProductCategory.update(values, {
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


exports.deleteProductCategory = async (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        await ProductCategory.destroy({
            where: {
                id: body.id
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