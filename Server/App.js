const express = require('express');
const morgan = require("morgan");
const cors=require('cors');
const bodyParser = require("body-parser");
const createError = require("http-errors");
const cookieParser = require('cookie-parser')
// const xssClean = require("xss-clean");
const rateLimit = require('express-rate-limit');
const Router = require('./src/Routers/userRouter');
const app = express();

app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["GET, POST,PATCH,DELETE"],
        credentials:true
    }
));

const rateLimiter = rateLimit ({
    windowMs : 1*60*1000,
    max : 100,
    message : "Too many request from this Ip. please try again later",
})

// app.use(xssClean(
//     {
//     origin:["http://localhost:3000/"],
//     methods:["GET, POST"],
//     credentials
//     }
// ));
app.use('/profile', express.static('upload/images'));







app.use(rateLimiter);
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const PORT=3000;

app.use("/",Router)


// client error handling
app.use((req,res,next)=>{
    next(createError(404, "404 Route not found"));
})


// server error handling
app.use((err,req,res,next)=>{
    return res.status( err.status || 500 ).json({
        success:false,
        message:err.message
    })
})

module.exports = app;


