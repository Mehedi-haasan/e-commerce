const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/user",
        [authJwt.verifyToken],
        controller.getUserProfile
    );


    app.put(
        "/api/user",
        [authJwt.verifyToken],
        controller.updateProfile
    );

    app.put(
        "/api/user/change-password",
        [authJwt.verifyToken],
        controller.changePassword
    );

    app.get(
        "/api/user/states",
        [authJwt.verifyToken],
        controller.getStates
    );

    app.get(
        "/api/user/addresses",
        [authJwt.verifyToken],
        controller.getAddresses
    );

    app.post(
        "/api/user/address",
        [authJwt.verifyToken],
        controller.createAddress
    );

    app.put(
        "/api/user/address/:addressId",
        [authJwt.verifyToken],
        controller.updateAddress
    );

    app.delete(
        "/api/user/address:addressId",
        [authJwt.verifyToken],
        controller.deleteAddress
    );
};