const createError = require("http-errors");
var express = require('express');
const multer = require("multer");
const path = require("path");
var bodyParser = require('body-parser');
const client = require('../../Config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const {data} = require('../../Models/userModels')


const GetSub=(req,res,next)=>{
  try {
    client.query(`Select * from subscribe`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
} catch (error) {
    console.error(error);
}
}

const Getgame=(req,res,next)=>{
    res.send(data);
}

// const postSub=(req, res) => {
//     const user=req.body;
//        const {heading,category,time,stock, price}=req.body;
//        const {filename}=req.file;
//        try {
//           client.query("insert into subscribe SET ?",{heading:heading, category:category, time:time, image:`http://localhost:5500/${filename}`, stock:stock, price:price}, (err,result)=>{
//              if(err){
//                console.log(err);
//              }else{
//                console.log("Insert Successfull")
//                res.status(201).json({status:201, })
//              }
//           })
//        } catch (error) {
//            console.log(error)
//        }
   
//       }

   const postSub = (req, res) => {
    try {
    const user=req.body;
    const {filename}=req.file;
    let insertQuery = `insert into subscribe(discount, image, rating, heading, stock,price,category,time,input,rules) values(${user.discount},'http://localhost:5500/${req.file.filename}',${user.rating},'${user.heading}','${user.stock}',${user.price},'${user.category}','{${user.time}}','{${user.input}}','{${user.rules}}')`

    console.log(insertQuery);
       client.query(insertQuery, (err, result)=>{
        if(err){
            console.log(err);
          }else{
            res.send('Post was successful');
          }
       })
    } catch (error) {
        console.log(error)
    }
   }


   const DeleteSub = (req, res)=>{
    let insertQuery = `delete from subscripe where id=${req.params.id}`
    console.log(insertQuery);

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
   }


module.exports = {GetSub,postSub,DeleteSub,Getgame}