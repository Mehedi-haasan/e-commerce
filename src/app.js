const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const createError = require("http-errors");
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit');

// initializing express js
const app = express();

// express configurations
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["GET, POST, PUT, PATCH, DELETE"],
        credentials: true
    }
));

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 100,
    max: 1000,
    message: "Too many request from this Ip. please try again later",
})

app.use(express.static('upload'));
app.use(rateLimiter);
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);


// client error handling
app.use((req, res, next) => {
    next(createError(404, "Url using request method not found!"));
})

// server error handling
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
})


// create new data in db server
// ===========================

const db = require("./models");
const Role = db.role;
const Carousel = db.carousel;
const ProductCategory = db.productCategory;
const ProductAttribute = db.productAttribute;
const ProductAttributeValue = db.productAttributeValue;

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    // roles
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });


    // carousel
    Carousel.create({
        id: 1,
        active: true,
        sequence: 10,
        name: "Carousel 1",
        image_url: "/profile/1631713778235.jpg",
    })

    Carousel.create({
        id: 2,
        active: true,
        sequence: 20,
        name: "Carousel 2",
        image_url: "/profile/1631713778235.jpg",
    })

    // product category
    ProductCategory.create({
        id: 1,
        active: true,
        name: "Subscriptions",
        image_url: "/profile/1631713778235.jpg",
    })

    ProductCategory.create({
        id: 2,
        active: true,
        name: "Gadgets",
        image_url: "/profile/1631713778235.jpg",
    })

    ProductCategory.create({
        id: 3,
        active: true,
        name: "Topup",
        image_url: "/profile/1631713778235.jpg",
    })

    // product attribute
    ProductAttribute.create({
        id: 1,
        active: true,
        name: "Color",
        display_type: "radio",
    })

    ProductAttribute.create({
        id: 2,
        active: true,
        name: "Size",
        display_type: "radio_pill",
    })

    ProductAttribute.create({
        id: 3,
        active: true,
        name: "Brand",
        display_type: "selection",
    })

    // product attribute value
    // for attribute 1
    ProductAttributeValue.create({
        id: 1,
        active: true,
        attr_id: 1,
        value: "red",
    })

    ProductAttributeValue.create({
        id: 2,
        active: true,
        attr_id: 1,
        value: "green",
    })

    ProductAttributeValue.create({
        id: 3,
        active: true,
        attr_id: 1,
        value: "black",
    })

    // for attribute 2
    ProductAttributeValue.create({
        id: 4,
        active: true,
        attr_id: 2,
        value: "S",
    })

    ProductAttributeValue.create({
        id: 5,
        active: true,
        attr_id: 2,
        value: "M",
    })

    ProductAttributeValue.create({
        id: 6,
        active: true,
        attr_id: 2,
        value: "L",
    })

    ProductAttributeValue.create({
        id: 7,
        active: true,
        attr_id: 2,
        value: "XL",
    })

    // for attribute 3
    ProductAttributeValue.create({
        id: 8,
        active: true,
        attr_id: 3,
        value: "Samsung",
    })

    ProductAttributeValue.create({
        id: 9,
        active: true,
        attr_id: 3,
        value: "LG",
    })

    ProductAttributeValue.create({
        id: 10,
        active: true,
        attr_id: 3,
        value: "Google",
    })

}

module.exports = app;


