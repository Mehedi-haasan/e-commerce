const db = require("../models");
const config = require("../config/db.config");
const ProductTemplate = db.productTemplete;
const ProductVariant = db.productVariant;
const ProductAttribute = db.ProductAttribute;

const Op = db.Sequelize.Op;

exports.getProductTemplete = async (req, res) => {
  try {
    let data = await ProductTemplate.findAll()

    res.status(200).send({
      success: true,
      items: data,
    })

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }

}







// exports.getProductVariant = async (req, res) => {
//     try {
//         let data = await ProductTemplate.findAll({
//             attributes: [],
//             where: {
//               id: req.params.id,
//             },
//             include: [
//               {
//                 model: ProductVariant,
//                 attributes: ['id', 'name', 'image_url','price', 'standard_price','description','category_id','template_id'],
//                 include: [
//                   {
//                     model: ProductAttribute,
//                     attributes: ['name', 'value'],
//                   },
//                 ],
//               },
//             ],
//           })

//         res.status(200).send({
//             success: true,
//             items: data,
//         })

//     } catch (error) {
//         res.status(500).send({ success: false, message: error.message });
//     }

// }

exports.getProductVariant = async (req, res) => {
  try {
    let data = await ProductVariant.findAll({
      where: {
        category_id: req.params.id,
      },
      attributes: ['id', 'name', 'image_url', 'price', 'standard_price', 'description', 'category_id', 'template_id'],
      include: [
        {
          model: ProductAttribute,
          attributes: ['name', 'value'],
        },
      ],

    })

    let attribute = await ProductAttribute.findAll({
      attributes: ['name', 'value'],
      where: {
        templete_id: req.params.id,
      },
    })


    const groupedData = attribute.reduce((acc, { name, value }) => {
      const existingAttribute = acc.find(attr => attr.name === name);
      if (existingAttribute) {
        if (!existingAttribute.value.includes(value)) {
          existingAttribute.value.push(value);
        }
      } else {
        acc.push({ name, value: [value] });
      }
      return acc;
    }, []);

    res.status(200).send({
      success: true,
      attribute: groupedData,
      items: data

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
    if (req.body.attribute) {
      variant = await generateProductVariants(req.body.attribute);
    }

    await ProductTemplate.create({
      acitve: 1,
      sequence: "10",
      category_id: 1,
      name: req.body.name,
      description: req.body.description,
      image_url: req.body.image_url,
      price: req.body.price,
      standard_price: req.body.standerd_price,
      sku: "MFOO1",
      product_type: true,
    })



    const productTempleteId = await ProductTemplate.findOne({
      attributes: ['id'],
      order: [['id', 'DESC']],
    });


    for (let i = 0; i < variant.length; i++) {
      let keys = Object.keys(variant[i]);
      let values = Object.values(variant[i])

      await ProductVariant.create({
        acitve: 1,
        name: req.body.name,
        image_url: req.body.image_url,
        price: req.body.price,
        standard_price: req.body.standerd_price,
        sku: "MFOO1",
        description: req.body.description,
        category_id: 1,
        template_id: productTempleteId.id,
        product_type: true,
      });


      const ProductVariantId = await ProductVariant.findOne({
        attributes: ['id'],
        order: [['id', 'DESC']],
      });


      for (let j = 0; j < keys.length; j++) {
        await ProductAttribute.create({
          acitve: true,
          variant_id: ProductVariantId.id,
          templete_id: productTempleteId.id,
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


