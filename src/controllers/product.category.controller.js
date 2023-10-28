const db = require("../models");
const ProductCategory = db.productCategory;


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

        res.status(200).send({ success: true, items: carouselItems });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.createProductCategory = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.imageUrl) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        await ProductCategory.create({
            active: req.body.active || true,
            name: req.body.name,
            image_url: req.body.imageUrl,
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
    if (body.imageUrl) {
        values.image_url = body.imageUrl;
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