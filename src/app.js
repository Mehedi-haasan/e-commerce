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
require('./routes/product.attribute.routes')(app);
require('./routes/product.category.routes')(app);
require('./routes/carousel.routes')(app);
require('./routes/product.template.routes')(app);
require('./routes/sale.order.routes')(app);


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
const ProductTemplate = db.productTemplate;
const ProductTemplateAttribute = db.productTemplateAttribute;
const ProductTemplateAttributeValue = db.productTemplateAttributeValue;
const ProductVariant = db.productVariant;
const ProductVariantAttributeValue = db.productVariantAttributeValue;

// db.sequelize.sync({ force: true }).then(async () => {
//     console.log('Drop and Resync Db');
//     await initUserRoles();
//     await initCarousel();
//     await initCategories();
//     await initProductAttributes();
//     await initProductAttributeValues();
//     await initProductTemplates();
//     await initProductTmplAttributes();
//     await initProductTmplAttrValues();
// });

async function initUserRoles() {
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
}

async function initCarousel() {
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

}

async function initCategories() {

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

}

async function initProductAttributes() {
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
}

async function initProductAttributeValues() {

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

async function initProductTemplates() {

    // product template
    ProductTemplate.create({
        id: 1,
        active: true,
        sequence: 10,
        category_id: 1,
        name: "Subscription 1",
        description: "Subscription 1 description",
        image_url: "/profile/1631713778235.jpg",
        price: 300,
        standard_price: 100,
        sku: "SKU001",
    })

    ProductTemplate.create({
        id: 2,
        active: true,
        sequence: 10,
        category_id: 1,
        name: "T-Shirt 1",
        description: "T-Shirt 2 description",
        image_url: "/profile/1631713778235.jpg",
        price: 310,
        standard_price: 135.40,
        sku: "SKU002",
    })

}

async function initProductTmplAttributes() {
    // product template attribute
    // color
    ProductTemplateAttribute.create({
        id: 1,
        active: true,
        attr_id: 1,
        tmpl_id: 2,
    })

    // size
    ProductTemplateAttribute.create({
        id: 2,
        active: true,
        attr_id: 2,
        tmpl_id: 2,
    })

}

async function initProductTmplAttrValues() {
    // set color property for product template 2
    // red
    ProductTemplateAttributeValue.create({
        id: 1,
        active: true,
        product_tmpl_attr_id: 1,
        value_id: 1,
    })

    // green
    ProductTemplateAttributeValue.create({
        id: 2,
        active: true,
        product_tmpl_attr_id: 1,
        value_id: 2,
    })

    // set size property for product template 2
    // S
    ProductTemplateAttributeValue.create({
        id: 3,
        active: true,
        product_tmpl_attr_id: 2,
        value_id: 4,
    })

    // M
    ProductTemplateAttributeValue.create({
        id: 4,
        active: true,
        product_tmpl_attr_id: 2,
        value_id: 5,
    })
}

module.exports = app;


