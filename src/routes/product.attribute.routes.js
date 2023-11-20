const { authJwt } = require("../middleware");
const controller = require("../controllers/product.attribute.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/product/attributes",
        [authJwt.verifyToken],
        controller.getProductAttributeValues
    );

    app.post(
        "/api/product/attribute",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createProductAttributeValue
    );

    app.put(
        "/api/product/attribute",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateProductAttribute
    );

    app.put(
        "/api/product/attribute/value",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateProductAttributeValue
    );

    app.delete(
        "/api/product/attribute/:attributeId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteProductAttribute
    );

    app.delete(
        "/api/product/attribute/value/:attributeValueId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteProductAttributeValue
    );
};