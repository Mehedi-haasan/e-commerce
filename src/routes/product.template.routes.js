const { authJwt } = require("../middleware");
const controller = require("../controllers/shop.product.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/products", controller.getProducts);

    app.get("/api/product/:templateId", controller.getProductVariants);

    app.post(
        "/api/product",
        [authJwt.verifyToken],
        controller.createProduct
    );

    app.post(
        "/api/product/custom-fields",
        [authJwt.verifyToken],
        controller.createVariantCustomFields
    );

    app.post(
        "/api/product/feedback",
        [authJwt.verifyToken],
        controller.createCustomerFeedback
    );

    app.put(
        "/api/product",
        [authJwt.verifyToken],
        controller.updateProduct
    );

    app.put(
        "/api/product-variant",
        [authJwt.verifyToken],
        controller.updateProductVariant
    );

    app.delete(
        "/api/product",
        [authJwt.verifyToken],
        controller.deleteProduct
    );
};