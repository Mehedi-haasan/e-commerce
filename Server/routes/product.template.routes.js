// const { verifySignUp } = require("../middleware");
const controller = require("../controllers/productTemplete.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/create/product", controller.createProduct);
    app.get("/api/get/product", controller.getProductVariant);

    // app.get("/api/auth/signin", (req, res)=>{
    //     res.send("Hello World")
    // });
};