const { authJwt } = require("../middleware");
const controller = require("../controllers/product.request.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/product/requests", [authJwt.verifyToken, authJwt.isAdmin], controller.getProductRequests);

    app.post(
        "/api/product/request",
        [authJwt.verifyToken],
        controller.createProductRequest
    );

    app.put(
        "/api/product/request/:requestId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateProductRequest
    );

    app.delete(
        "/api/product/request/:requestId",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteProductRequest
    );
};