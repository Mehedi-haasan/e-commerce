const createError = require("http-errors");
var express = require('express');
const multer = require("multer");
const path = require("path");
var bodyParser = require('body-parser');
const client = require('../../Config/db');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const { data } = require('../../Models/userModels')


const GetSub = (req, res, next) => {


    const product_template_attributes = `select pa.attribute_id,pa.name,pa.data_type,pav.value, pav.value_id from product_attributes pa 
    left join
    product_attribute_values pav on pav.attribute_id=pa.attribute_id
    where template_id=1 group by pa.attribute_id, pav.value_id; `


    const mQuery = `
    select pt.template_id,pv.variant_id,pv.name,pv.price,pv.sku,pv.description,pav.value ,pav.value_id,pa.name as attribute_type ,pa.attribute_id from product_templates pt
    left join product_variants pv on pv.template_id=pt.template_id
    left join product_variant_attribute_values pvav on pvav.variant_id=pv.variant_id
    left join product_attributes pa on pa.attribute_id=pvav.attribute_id
    left join product_attribute_values pav on pav.attribute_id=pvav.attribute_id
    -- join for image group_concat
    where pt.template_id=1  and pa.attribute_id is not null
    group by  pt.template_id,pv.variant_id,pav.value_id,pa.name ,pa.attribute_id;
    `;
    client.query(product_template_attributes, (err, result) => {

        if (!err) {
            let product_variant = {}
            var product_attributes ={}

            result.forEach(attribute =>{
                const {attribute_id,name,data_type,value,value_id} = attribute;
                
                if(!product_attributes[attribute_id]){
                    product_attributes[attribute_id] = {
                        id:attribute_id,
                        name:name,
                        display_type:data_type,
                        values:[],

                    }
                }
                product_attributes[attribute_id]["values"].push({
                    id:value_id,
                    name:value,
                })
            })


            var values = Object.keys(product_attributes).map(function (key) {
                return product_attributes[key];
            });

            product_variant["attributes"]=values
   









            client.query(mQuery, (err, results) => {
                if (err) {
                    console.error('Error executing query:', err);
                    res.status(500).send('Error retrieving data from the database');
                    return;
                }
                // Send the query results as a JSON response
                // Create an empty result object
                const result = {};
                // Iterate through the inputArray and group the data
                results.forEach(item => {
                    const { template_id, variant_id, name, price, sku, description, value, value_id, attribute_type, attribute_id } = item;

                    // Initialize objects if they don't exist in the result
                    if (!result[variant_id]) {
                        result[variant_id] = {
                            id: item.variant_id,
                            name: item.name,
                            price: item.price,
                            sku: item.sku,
                            description: item.description,
                            attributes: {},
                        };
                    }
                    if (!result[variant_id]["attributes"][attribute_type]) {
                        result[variant_id]["attributes"][attribute_type] = {
                            id: attribute_id,
                            type: attribute_type,
                            values: []
                        };
                    }
                    // Push the attribute into the attributes array
                    result[variant_id]["attributes"][attribute_type]["values"].push({
                        id: value_id,
                        name: value,

                    });


                });

                var values = Object.keys(result).map(function (key) {
                    return result[key];
                });

                product_variant["variants"] = values
                res.json(product_variant);
            });

        }
    })

}


const ProductsByCategory = (req, res) => {
    const mQuery = `select pc.image_url,pc.name,pc.id, pt.name as template_name ,pt.template_id from product_category as pc
                left join product_templates pt on pt.category_id=pc.id group by pc.id,pt.template_id;`
    client.query(mQuery, (err, results) => {
        if (err) res.send({ Message: "" });
        else {

            // Initialize an object to store the grouped products
            const groupedProducts = {};


            // Iterate through the input data and group products by 'id'
            results.forEach(item => {
                const id = item.id;

                // Create an array for the 'id' if it doesn't exist
                if (!groupedProducts[id]) {
                    groupedProducts[id] = {
                        id: item.id,
                        name: item.name,
                        imageUrl: item.image_url,
                        products: []
                    };
                }

                // Add the product to the corresponding 'id' group
                groupedProducts[id].products.push({
                    id: item.template_id,
                    name: item.template_name
                });
            });

            var values = Object.keys(groupedProducts).map(function (key) {
                return groupedProducts[key];
            });

            // console.log(groupedProducts);
            res.send(values)
        }

    })
}






const Getgame = (req, res, next) => {
    res.send(data);
}


const postSub = (req, res) => {
    try {
        const user = req.body;
        const { filename } = req.file;
        let insertQuery = `insert into subscribe(discount, image, rating, heading, stock,price,category,time,input,rules) values(${user.discount},'http://localhost:5500/${req.file.filename}',${user.rating},'${user.heading}','${user.stock}',${user.price},'${user.category}','{${user.time}}','{${user.input}}','{${user.rules}}')`
        console.log(insertQuery);
        client.query(insertQuery, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Post was successful');
            }
        })
    } catch (error) {
        console.log(error)
    }
}


const DeleteSub = (req, res) => {
    let insertQuery = `delete from subscripe where id=${req.params.id}`
    console.log(insertQuery);

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
}



const ProductsBycategoryId = (req, res) => {
    const mQuery = `select pc.image_url,pc.name,pc.id, pt.name,pt.template_id from product_category as pc
    left join product_templates pt on pt.category_id=pc.id
	where pc.id =${req.params.id};`

    client.query(mQuery, (err, results) => {
        if (!err) {
            res.json(results)
        }
    })


}

const ProductsOneBycategoryId = (req, res) => {
    // const mQuery = `select pc.image_url,pc.name,pc.id, pt.name,pt.template_id from product_category as pc
    // left join product_templates pt on pt.category_id=pc.id
    // where pc.id =2 and template_id=${req.params.id};`
    const mQuery = `select pc.image_url,pc.name,pc.id, pt.name,pt.template_id from product_category as pc
    left join product_templates pt on pt.category_id=pc.id
	where pc.id =${req.params.id};`

    client.query(mQuery, (err, results) => {
        if (!err) {
            res.json(results)
        }
    })


}






module.exports = { GetSub, postSub, DeleteSub, Getgame, ProductsByCategory, ProductsBycategoryId, ProductsOneBycategoryId }