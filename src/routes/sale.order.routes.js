const { authJwt } = require("../middleware");
const controller = require("../controllers/sale.order.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/order/history",
        [authJwt.verifyToken],
        controller.getOrders
    );
    
    app.get(
        "/api/order/cart-items",
        [authJwt.verifyToken],
        controller.getCartItems
    );

    app.post(
        "/api/cart/add-item",
        [authJwt.verifyToken],
        controller.addCartItem
    );

    app.put(
        "/api/cart/update-items",
        [authJwt.verifyToken],
        controller.updateCartItems
    );

    app.post(
        "/api/cart/place-order",
        [authJwt.verifyToken],
        controller.placeOrder
    );

    app.delete(
        "/api/cart/remove-item",
        [authJwt.verifyToken],
        controller.deleteCartItem
    );

    app.put(
        "/api/order/update-status",
        [authJwt.verifyToken],
        controller.updateOrderStatus
    );


};