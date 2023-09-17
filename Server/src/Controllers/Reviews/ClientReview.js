const createError = require("http-errors");
var express = require('express');
var bodyParser = require('body-parser');
const client = require('../../Config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const getReview = (req,res,next)=>{
    client.query(`Select * from reviews`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}

const getReviewById = (req,res,next)=>{
    client.query(`Select * from reviews where name = ${req.params.name}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
}



const postReview = (req, res) => {
    try {
        const user=req.body;
        res.json({
            success: 1,
            profile_url: `http://localhost:5000/profile/${req.file.filename}`
        })
       let insertQuery = `insert into reviews(name, image, message,star) values('${user.name}','http://localhost:5000/profile/${req.file.filename}','${user.message}',${user.star})`
       console.log(insertQuery);
       client.query(insertQuery, (err, result)=>{
           if(!err){
               res.send('Insertion was successful')
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



const deleteReview = (req,res,next)=>{
    let insertQuery =`delete from works where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}


module.exports = {getReview,getReviewById,postReview,putReview,patchReview,deleteReview};