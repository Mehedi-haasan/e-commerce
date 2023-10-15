const createError = require("http-errors");
var express = require('express');
const multer = require("multer");
const path = require("path");
var bodyParser = require('body-parser');
const client = require('../../Config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const getPicture=(req,res,next)=>{
    client.query(`Select * from products`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}



const createpicture=(req, res) => {
    try {
    const user=req.body;
       let insertQuery = `insert into products(heading,discount,price,stock,image,colour,size,input,rating,category) values('${user.heading}',${user.discount},${user.price},'${user.stock}','{${user.image}}','{${user.colour}}','{${user.size}}','{${user.input}}',${user.rating},'${user.category}')`
    //    console.log(insertQuery);
       client.query(insertQuery, (err, result)=>{
           if(!err){
               res.send('Data Post Successfull')
           }
           else{ console.log(err.message) }
       })
       client.end;
    } catch (error) {
       console.error(error);
    }}

    


const putPicture = (req, res) => {
    let user = req.body;
    let updateQuery = `UPDATE picture SET id=${user.id}, image1 = '${user.image1}', image2 = '${user.image2}', image3 = ${user.image3}, image4=${user.image4}, image5=${user.image5} WHERE id = ${req.params.id}`;
    // Execute the query using the database client
    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Success');
        } else {
            console.log(err.message);
            res.status(201).send('An error occurred during the update');
        }
    });
    client.end;
}


const deletePicture = (req, res)=>{
    let insertQuery = `delete from picture where id=${req.params.id}`
    console.log(insertQuery);

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}



module.exports = {getPicture,createpicture,putPicture,deletePicture}