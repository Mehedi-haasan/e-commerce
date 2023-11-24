const db = require("../models");
const Company = db.companyProfile;


exports.getCompanyInfo = async (req, res) => {

    try {
        const result = await Company.findOne({});

        if (!result) {
            return res.status(200).send({
                success: true,
                message: "No record found."
            });
        }


        res.status(200).send({ success: true, data: result });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.updateCompanyInfo = async (req, res) => {
    const body = req.body;
    const companyId = req.params.companyId;
    if (!body || !companyId) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        const result = await Company.findOne({
            id: companyId
        });

        await result.update(body);

        res.send({
            success: true,
            message: "Record updated successfully!"
        });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

