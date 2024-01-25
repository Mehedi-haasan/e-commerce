const db = require("../models");
const config = require("../config/db.config");
const ProductTemplate = db.productTemplete;
const ProductVariant = db.productVariant;
const ProductVariantAttributeValue = db.productVariantAttributeValue;

const Op = db.Sequelize.Op;


exports.getProductVariant = async (req, res) => {
    try {
        let data = await ProductTemplate.findAll({
            attributes: ['id'],
            where: {
              id: 1,
            },
            include: [
              {
                model: ProductVariant,
                attributes: ['id', 'name', 'image_url'],
                include: [
                  {
                    model: ProductVariantAttributeValue,
                    attributes: ['name', 'value'],
                  },
                ],
              },
            ],
          })

        res.status(200).send({
            success: true,
            items: data,
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}




function generateProductVariants(attributes) {
    const variants = [];
  
    function generateVariantsHelper(index, currentVariant) {
      if (index === attributes.length) {
        variants.push({ ...currentVariant });
        return;
      }
  
      const currentAttribute = attributes[index];
  
      for (const value of currentAttribute.value) {
        currentVariant[currentAttribute.name] = value;
        generateVariantsHelper(index + 1, currentVariant);
      }
    }
  
    generateVariantsHelper(0, {});
  
    return variants;
  }


exports.createProduct = async (req, res) => {

    try {

        let variant;
        let product = [];
        if (req.body.attribute) {
            variant = await generateProductVariants(req.body.attribute);
        }

        await ProductTemplate.create({
            acitve: 1,
            sequence:"10",
            category_id:1,
            name: req.body.name,
            description:req.body.description,
            image_url: req.body.image_url,
            price: req.body.price,
            standerd_price: req.body.standerd_price,
            sku:"MFOO1",
            product_type: true,
        })

        let allProduct =[];

        const productTempleteId = await ProductTemplate.findOne({
            attributes: ['id'],
            order: [['id', 'DESC']],
          });


        for (let i = 0; i < variant.length; i++) {
            const keys = Object.keys(variant[i]);
            const values = Object.values(variant[i])




            await ProductVariant.create({
                acitve: 1,
                name: req.body.name,
                image_url: req.body.image_url,
                price: req.body.price,
                standerd_price: req.body.standerd_price,
                sku:"MFOO1",
                description:req.body.description,
                category_id:1,
                template_id:productTempleteId.id,
                product_type: true,
            });


            const ProductVariantId = await ProductVariant.findOne({
                attributes: ['id'],
                order: [['id', 'DESC']],
              });


            for (let j = 0; j < keys.length; j++) {
                await ProductVariantAttributeValue.create({
                    acitve:1,
                    variant_id: ProductVariantId.id,
                    name: keys[j],
                    value: values[j]
                })
            }
        }

        res.status(200).send({
            success: true,
            message: "Product Create Successfully"
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }

}


