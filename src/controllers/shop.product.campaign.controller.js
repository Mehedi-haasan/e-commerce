const db = require("../models");
const Op = db.Sequelize.Op;

const ProductCampaign = db.productCampaign;
const ProductCampaignLine = db.productCampaignLine;

exports.getCampaign = async (req, res) => {
    const today = new Date();

    try {
        const result = await ProductCampaign.findAll({
            where: {
                active: true,
                start_date: {
                    [Op.gte]: today
                },
                end_date: {
                    [Op.lte]: today
                }
            },
            includes: [ProductCampaignLine]
        });

        if (!result) {
            return res.status(204).send({
                success: true,
                message: "No record found."
            });
        }

        var items = [];
        for (let i = 0; i < result.length; i++) {
            const item = result[i];
            const lines = item.product_campaign_lines;
            items.push({
                id: item.id,
                name: item.name,
                startDate: item.start_date,
                endDate: item.end_date,
                imageUrl: item.image_url,
                lines: lines
            });
        }

        res.status(200).send({ success: true, items: items });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.createCampaign = async (req, res) => {
    const body = req.body;
    if (!body.name || !body.image_url || !body.date_start || !body.date_end) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        const result = await ProductCampaign.create({
            active: req.body.active || true,
            name: req.body.name,
            date_start: req.body.date_start,
            date_end: req.body.date_end,
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

exports.updateCampaign = async (req, res) => {
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
        await ProductCampaign.update(values, {
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


exports.deleteCampaign = async (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        await ProductCampaign.destroy({
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