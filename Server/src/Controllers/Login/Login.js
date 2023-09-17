const createError = require("http-errors");
var express = require('express');
const multer = require("multer");
const path = require("path");
var cookie = require('cookie');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const client = require('../../Config/db');
const { error } = require("console");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


const getRegister=(req, res)=>{
    client.query('SELECT * FROM user_register', (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          res.status(500).send('Error retrieving data from the database');
          return;
        }
        // Send the query results as a JSON response
        res.json(results);
      });
};



const Register= (req, res)=>{
    const user=req.body;
    const {name,email,password}=user;
    client.query(`Select * from user_register where email ='${user.email}'`, async(err, result)=>{
        if(err) return res.json({Message:"Server side error"})

        if(result.length > 0){
           return res.json({Message:"Email already exist"});
        }
        else{
            let hasedPassword = await bcrypt.hash(password, 8); 
            client.query('INSERT INTO user_register SET ?', {name:name, email:email, password:hasedPassword},(error, results)=>{
            if(error){
            console.log(error)
            }
            else{
            return res.json({Status:"Success"});
            }

            })
         }
  
      });

};





    const Login =(req, res)=>{
        const sql= "SELECT * FROM user_register WHERE email = ? AND password = ?";
        client.query(sql, [req.body.email, req.body.password], (err, data)=>{
            if(err) return res.json({Message:"Server side error"})
            if(data.length > 0){
                const name =data[0].name;
                const token = jwt.sign({name}, "json_web_token_secret_key_ceevit_250",{expiresIn:"3d"});
                res.cookie('token', token);
                return res.json({Status:"Success"})

            }else{
                return res.send({Message:"Password does not match"})
            }
        })
    }


    const AdminLogin =(req, res)=>{
        const sql= "SELECT * FROM user_register WHERE email = ? AND password = ?";
        client.query(sql, [req.body.email, req.body.password], (err, data)=>{
            if(err) return res.json({Message:"Server side error"})
            if(data.length > 0){
                const name =data[0].name;
                const token = jwt.sign({name}, "json_web_token_secret_key_ceevit_250",{expiresIn:"3d"});
                res.cookie('token', token);
                return res.json({Status:"Success"})

            }else{
                return res.send({Message:"Password does not match"})
            }
        })
    }


    const LogOut=(req, res)=>{
        res.clearCookie('token');
        return res.json({Status:"Success"});
    }




const deleteUser = (req, res)=>{
    let insertQuery = `delete from user_register where id=${req.params.id}`
    console.log(insertQuery);

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}



module.exports = {Login,getRegister,Register,deleteUser,AdminLogin,LogOut}