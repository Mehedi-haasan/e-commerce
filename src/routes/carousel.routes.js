const { authJwt } = require("../middleware");
const controller = require("../controllers/shop.carousel.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/carousels", controller.getCarousels);

    app.post(
        "/api/carousel",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.createCarousel
    );

    app.put(
        "/api/carousel",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.updateCarousel
    );

    app.delete(
        "/api/carousel",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.deleteCarousel
    );
};