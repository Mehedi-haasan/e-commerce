const { authJwt } = require("../middleware");
const controller = require("../controllers/product.category.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/product/categories",
        controller.getProductCategories
    );
    app.get(
        "/api/category/products",
        controller.getProductByCategories
    );

    app.post(
        "/api/product/category",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createProductCategory
    );

    app.put(
        "/api/product/category",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateProductCategory
    );

    app.delete(
        "/api/product/category",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteProductCategory
    );
};