const createError = require("http-errors");
var express = require('express');
const multer = require("multer");
var nodemailer = require('nodemailer');
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
            return res.send({Status:"Success"});
            }

            })
         }
  
      });

};


// const Register= (req, res)=>{
//     const user=req.body;
//         client.query(`Select * from user_register where email ='${user.email}'`, async(err, result)=>{
//             if(err) return res.send('Server side error');

//             if(result.rows.length > 0){
//             return res.send('Email already exist')
//             }
//             else{
//                 // let hasedPassword = await bcrypt.hash(user.password, 8); 
//                 let insertQuery = `insert into user_register(name, email, password,phone) values('${user.name}','${user.email}','${user.password}','${user.phone}')` 
               
//                 client.query(insertQuery,(error, results)=>{
//                 if(error){
//                     res.send(error)
//                 }
//                 else{
//                 return res.send('Registration Successfull')
//                 }

//                 })
//             }
    
//         });

//         }


    // const Login =(req, res)=>{
    //     const user=req.body;
    //     let insertQuery = `select * from user_register where email = '${user.email}' and password = '${user.password}'`
    //     client.query(insertQuery, (err, data)=>{
    //         if(err){ return res.send("Server side error")}
    //         if(data.rows.length > 0){
    //             const name =data.rows[0].name;
    //             const email = data.rows[0].email;
    //             const token = jwt.sign({name,email}, "json_web_token_secret_key_ceevit_250",{expiresIn:"3d"});
    //             res.cookie('token', token);
    //             return res.send('Success')
    //         }else{
    //             return res.send('Password does not match')
    //         }
    //     })
    // }



    const ChangePassword=(req, res)=>{
        const user=req.body;
        const insertQuery = `Select * from user_register where email ='${user.email}'`;

            client.query(insertQuery, (err, result)=>{
                if(err) return res.send('Server side error');
                console.log(result.rows.length)
                if(result.rows.length === 0){
                return res.send('Invalid Email')
                }
                else{
                   if(user.npassword === user.cnpassword){
                    let updateQuery = `UPDATE user_register SET  name = '${user.displayName}', email = '${user.email}', password = '${user.npassword}' WHERE email = '${user.email}'`;
                    console.log(updateQuery)
                    client.query(updateQuery,(error, results)=>{
                    if(error){
                        res.send(error)
                    }
                    else{
                    return res.send('Update was successful')
                    }
    
                    })
                    
                   }
                }
        
            });
            client.end;
            }


    const forgetPassword =(req, res)=>{
        let testAccount = nodemailer.createTestAccount();
         const user=req.body;
        //  let insertQuery = `select * from user_register where email = '${user.email}'`

        try {
            let testAccount = nodemailer.createTestAccount();
            const transporter = nodemailer.createTransport({
                service:"gmail",
                auth:{
                    user:"busraahamed930@gmail.com",
                    pass:"7895"
                }
            });

            const mailOptions = {
                from:"busraahamed930@gmail.com",
                to:user.email,
                subject: "Hello ✔", // Subject line
                text: "Hello world", // plain text body
                html: '<h1>Hello world</h1>', // html body
            }

            transporter.sendMail(mailOptions, (error, info)=>{
                if(error){
                    console.log(error)
                }else{
                    console.log("Email Send")
                    res.send("Email send")
                }
            })
        } catch (error) {
            res.send(error)
        }
        
        
    }




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


    // const LogOut=(req, res)=>{
    //     res.clearCookie('token');
    //     return res.json({Status:"Success"});
    // }

    const LogOut=(req, res)=>{
        res.clearCookie('token');
        return res.send("Success");
    }


const deleteUser = (req, res)=>{
    let insertQuery = `delete from user_register where id=${req.params.id}`
    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
}



module.exports = {Login,getRegister,Register,deleteUser,AdminLogin,LogOut,forgetPassword,ChangePassword}