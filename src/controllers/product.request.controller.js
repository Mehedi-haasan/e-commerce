const db = require("../models");
const ProductRequest = db.productRequest;


exports.getProductRequests = async (req, res) => {

    try {
        const result = await ProductRequest.findAll({
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
                type: item.type,
                mobile: item.mobile,
                reference: item.reference,
                status: item.status,
                imageUrl: item.image_url,
            });
        }

        res.status(200).send({ success: true, items: items });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.createProductRequest = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.imageUrl) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        await ProductRequest.create({
            active: req.body.active || true,
            name: req.body.name,
            type: req.body.type,
            mobile: req.body.mobile,
            reference: req.body.reference,
            status: 'pending',
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

exports.updateProductRequest = async (req, res) => {
    const requestId = req.params.requestId;
    const body = req.body;
    if (!body.status || !requestId) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        await ProductRequest.update({
            'status': body.status || 'pending',
        }, {
            where: {
                id: requestId
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


exports.deleteProductRequest = async (req, res) => {
    const requestId = req.params.requestId;
    if (!requestId) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        await ProductRequest.destroy({
            where: {
                id: requestId
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