const express = require('express');
const Router = express.Router();
const fs=require('fs');
const multer = require("multer");
const path = require("path");
var app = express();
const jwt = require("jsonwebtoken");
const client = require('../Config/db');
const moment = require("moment")


const {getItems,getItemById,createItem,putItem,patchItem,deleteItem} =require('../Controllers/Items/Items');
const {Login,getRegister,Register,deleteUser,AdminLogin,LogOut,forgetPassword,ChangePassword}=require('../Controllers/Login/Login')
const {GetSub,postSub,DeleteSub,Getgame,ProductsByCategory,ProductsBycategoryId,ProductsOneBycategoryId}=require('../Controllers/Subscription/Subscription')

const {getGame,postGame}=require('../Controllers/Game/Game')

const {getPicture,createpicture}=require('../Controllers/Picture/Picture')
const {GetCartProduct,postCart,deleteCartProduct,getCartByEmail,getCartPriceByEmail}=require('../Controllers/Cart/Cart')


const verifyUser=(req, res, next)=>{
   const token=req.cookies.token;
   if(!token){
    return res.json({Message:"We need token plese provied it. login now"})
   }else{
    jwt.verify(token, "json_web_token_secret_key_ceevit_250",(err, decoded)=>{
        if(err){
            return res.json({Message:"Authentication Error"})
        }else{
            req.name = decoded.name;
            req.email = decoded.email;
            next();
        }
    })
   }
}

Router.get("/",verifyUser,(req, res)=>{
    return res.json({Status:"Success", name:req.name,email:req.email})
});


const storage = multer.diskStorage({
    destination: './upload/image',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}"_ "${Date.now()}${path.extname(file.originalname)}`)
    }
})


var imgconfig = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, "./upload")
    },
    filename:(req, file, callback)=>{
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})


// const isImage =(req, file, callback)=>{
//     if(file.mimetype.startsWith("image")){
//         callback(null, true)
//     }else{
//         callback(null, Error("Only Image is allow"))
//     }
// }


const upload = multer({
    storage: imgconfig,

})

// INSERT INTO items (id, heading, category, price, image, size, colour, input, discount, stock, rating)VALUES(228,'Free fire','Game',1550, '["https://img.freepik.com/premium-photo/future-robotic-army-warfare_592197-214.jpg", "https://img.freepik.com/free-photo/generative-ai-soldiers-shooting-background-field_1268-22179.jpg","https://img.freepik.com/premium-photo/special-forces-are-storming-ai-generate_250484-8590.jpg"]','["60","120","180","240","300","360","420","480","1200","1500","1800"]', '["Blue","Black","White"]', '["Name","Email"]',5,'In Stock',4);



Router.get("/getladies/items",getItems);
Router.get("/getitem/:id",getItemById);
Router.post("/createitem", upload.single('image'), createItem);
Router.put("/putitem/:id", putItem);
Router.patch("/patchitem/:id", patchItem);
Router.delete("/deleteitem/:id",deleteItem);


Router.get("/getSub",GetSub);
Router.get("/home",ProductsByCategory);
Router.get("/getCategory/:id",ProductsBycategoryId);
Router.get("/getOneCategory/:id",ProductsOneBycategoryId);




Router.get("/Getgame",Getgame);
Router.post("/post", upload.single('image'), postSub);
Router.delete("/delete/subscription/:id",DeleteSub);


 Router.get("/test",(req,res)=>{
    try {
        client.query(`select product.id,product.heading,product.discount,product.price,product.category,image.image,size.size,color.colour,rule.rule,input.input,product.rating,product.stock 
        from 
        product inner join image on product.image = image.id
        inner join size on product.size = size.id
        inner join color on product.color = color.id
        inner join rule on product.rule = rule.id
        inner join input on product.input = input.id;`, (err, result)=>{
            if(!err){
                res.send(result.rows);
            }
        });
        client.end;
    } catch (error) {
        console.error(error);
    }
 });



Router.get("/getRegister",getRegister);

Router.post("/user/register", Register);
Router.post("/login/", Login);
Router.get("/logout", LogOut);
Router.post("/admin/login/", AdminLogin);
Router.delete("/delete/user/:id", deleteUser);

Router.post("/forgetPassword",forgetPassword);
Router.patch("/changePassword/",ChangePassword);





Router.get("/games",getGame);
// Router.get("/getitem/:id",getItemById);
Router.post("/postgame", upload.single('image'), postGame);
// Router.put("/putitem/:id", putItem);
// Router.patch("/patchitem/:id", patchItem);
// Router.delete("/deleteitem/:id",deleteItem);



Router.get("/getPicture",getPicture);
Router.post("/createpicture", createpicture);



Router.get("/cart",GetCartProduct);
Router.get("/cart/:email",getCartByEmail);
Router.get("/cart/total/:email",getCartPriceByEmail);
Router.post("/addcart", postCart);
Router.delete("/delete/cart/:id", deleteCartProduct);


module.exports= Router;