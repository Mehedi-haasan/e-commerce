const { authJwt } = require("../middleware");
const controller = require("../controllers/shop.product.campaign.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/product/campaigns", controller.getCampaign);

    app.post(
        "/api/product/campaign",
        [authJwt.verifyToken],
        controller.createCampaign
    );

    app.put(
        "/api/product/campaign",
        [authJwt.verifyToken],
        controller.updateCampaign
    );

    app.delete(
        "/api/product/campaign",
        [authJwt.verifyToken],
        controller.deleteCampaign
    );
};