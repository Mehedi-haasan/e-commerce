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
        origin: ["http://localhost:3000", "http://localhost:3001", "https://mahlun.com", "http://mahlun.com"],
        methods: ["GET, POST, PUT, PATCH, DELETE"],
        credentials: true
    }
));

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 100,
    max: 1000,
    message: "Too many request from this Ip. Please try again after some times.",
})

app.use(express.static('upload'));
app.use(rateLimiter);
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/product.request.routes')(app);
require('./routes/product.attribute.routes')(app);
require('./routes/product.category.routes')(app);
require('./routes/product.campaign.routes')(app);
require('./routes/carousel.routes')(app);
require('./routes/product.template.routes')(app);
require('./routes/sale.order.routes')(app);
require('./routes/company.profile.route')(app);


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
const CompanyProfile = db.companyProfile;
const States = db.states;

db.sequelize.sync({ force: false }).then(async () => {
    // console.log('Drop and Resync Db');
    // initUserRoles();
    // initStates();
    // initCarousel();
    // initCategories();
    // initProductAttributes();
    // initProductAttributeValues();
    // initCompanyProfile()
});

async function initCompanyProfile() {
    // company profile
    CompanyProfile.create({
        id: 1,
        name: "Mahlun",
        email: "support@mahlun.com",
    })
}

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


async function initStates() {
    const DEFAULT_DELIVERY_CHARGE = 50;
    const DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA = 150;

    // states
    States.create({
        id: 1,
        name: "Dhaka",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE,
    });

    States.create({
        id: 2,
        name: "Chittagong",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 3,
        name: "Khulna",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 4,
        name: "Rajshahi",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 5,
        name: "Sylhet",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 6,
        name: "Barisal",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 7,
        name: "Rangpur",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 8,
        name: "Mymensingh",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 9,
        name: "Dinajpur",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 10,
        name: "Cox's Bazar",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 11,
        name: "Jessore",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 12,
        name: "Comilla",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 13,
        name: "Bogra",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 14,
        name: "Brahmanbaria",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 15,
        name: "Jamalpur",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 16,
        name: "Narayanganj",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 17,
        name: "Natore",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 18,
        name: "Tangail",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 19,
        name: "Faridpur",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 20,
        name: "Pabna",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 21,
        name: "Manikganj",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 22,
        name: "Noakhali",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 23,
        name: "Gazipur",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 24,
        name: "Bhola",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 25,
        name: "Sherpur",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 26,
        name: "Chandpur",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
    });

    States.create({
        id: 27,
        name: "Chapainawabganj",
        country: "Bangladesh",
        state_code: "BD",
        delivery_charge: DEFAULT_DELIVERY_CHARGE_OUTSIDE_DHAKA,
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
        display_type: "color",
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

module.exports = app;


