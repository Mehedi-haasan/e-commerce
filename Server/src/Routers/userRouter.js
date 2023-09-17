const express = require('express');
const Router = express.Router();
const fs=require('fs');
const multer = require("multer");
const path = require("path");
var app = express();
const jwt = require("jsonwebtoken");
const client = require('../Config/db');


const {getItems,getItemById,createItem,putItem,patchItem,deleteItem} =require('../Controllers/Items/Items');
const {Login,getRegister,Register,deleteUser,AdminLogin,LogOut}=require('../Controllers/Login/Login')




// const createToken = async()=>{
//  const token =  await jwt.sign({id:"5378"}, "json_web_token_secret_key_ceevit_250",{expiresIn: "1d"});
//    console.log(token)

//    const userVeryfy = await jwt.verify(token, "json_web_token_secret_key_ceevit_250");
//    console.log(userVeryfy)
// }


// createToken();

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
            next();
        }
    })
   }
}

Router.get("/",verifyUser,(req, res)=>{
    return res.json({Status:"Success", name:req.name})
});


const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    // limits: {
    //     fileSize: 10
    // }
})





Router.get("/getitems",getItems);
Router.get("/getitem/:id",getItemById);
Router.post("/createitem", createItem);
// Router.post("/createitem", upload.single('profile'), createItem);
Router.put("/putitem/:id", putItem);
Router.patch("/patchitem/:id", patchItem);
Router.delete("/deleteitem/:id",deleteItem);

Router.get("/getRegister",getRegister);
Router.post("/user/register", Register);
Router.post("/login/", Login);
Router.get("/logout", LogOut);
Router.post("/admin/login/", AdminLogin);
Router.delete("/delete/user/:id", deleteUser);



module.exports= Router;