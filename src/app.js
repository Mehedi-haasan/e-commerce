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

// const db = require("./models");
// const Role = db.role;

// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
// });

// function initial() {
//     Role.create({
//         id: 1,
//         name: "user"
//     });

//     Role.create({
//         id: 2,
//         name: "moderator"
//     });

//     Role.create({
//         id: 3,
//         name: "admin"
//     });
// }

module.exports = app;


