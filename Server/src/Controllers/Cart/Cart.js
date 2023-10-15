const createError = require("http-errors");
var express = require('express');
var bodyParser = require('body-parser');
const client = require('../../Config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const GetCartProduct = (req,res,next)=>{
    client.query(`Select * from cart`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}





const getCartByEmail = (req,res,next)=>{
    client.query(`Select * from cart where email = '${req.params.email}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

const getCartPriceByEmail = (req,res,next)=>{
    let insertQuery = `select sum(total_price) as total from cart where email = '${req.params.email}'`
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send(result.rows[0].total);
        }
    });
    client.end;
}

const postCart = (req, res) => {
    const user=req.body;
    try {
       let insertQuery = `insert into cart(id,discount,heading,price,quantity,image,colour,size,input,category,email,name,player_id,total_price)
        values(${user.id},${user.discount},'${user.heading}',${user.price},${user.quantity},'${user.image}','${user.colour}','${user.size}','{${user.input}}','${user.category}','${user.email}','${user.name}',${user.player_id},${user.price*user.quantity})`
       client.query(insertQuery, (err, result)=>{
           if(!err){
               res.json("Add to cart")
           }
           else{ console.log(err.message) }
       })
       client.end;
    } catch (error) {
       console.error(error);
    }
   }

const putReview = (req,res,next)=>{
    let user = req.body;
    let updateQuery = `update works set name = '${user.name}' where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}


const patchReview = (req,res,next)=>{
    let user = req.body;
    let updateQuery = `update works set name = '${user.name}' where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}



const deleteCartProduct = (req,res,next)=>{
    let insertQuery =`delete from cart where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}


module.exports = {GetCartProduct,getCartByEmail,postCart,putReview,patchReview,deleteCartProduct,getCartPriceByEmail};