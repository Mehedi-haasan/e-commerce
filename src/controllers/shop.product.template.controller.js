const db = require("../models");
const sequelize = db.sequelize;
const ProductTemplate = db.productTemplate;
const ProductCategory = db.productCategory;
const ProductTemplateAttribute = db.productTemplateAttribute;
const ProductTemplateAttributeValue = db.productTemplateAttributeValue;
const ProductVariant = db.productVariant;
const ProductVariantAttributeValue = db.productVariantAttributeValue;

const ProductCustomFields = db.productCustomFields;
const CustomerFeedback = db.customerFeedback;

exports.getProducts = (req, res) => {
    var params = {
        active: true
    };

    if (req.query.categoryId) {
        params.category_id = req.query.categoryId;
    }
    ProductTemplate.findAll({
        where: {
            active: true
        },
        include: [ProductCategory],
    })
        .then(values => {
            if (!values) {
                return res.status(204).send({
                    success: true,
                    message: "No record found."
                });
            }

            console.log(values);

            var productTemplateItems = [];
            for (let i = 0; i < values.length; i++) {
                const templateItem = values[i];
                const category = templateItem['product_category'];

                productTemplateItems.push({
                    id: templateItem.id,
                    name: templateItem.name,
                    rating: 5,
                    stockStatus: 'available',
                    sequence: templateItem.sequence,
                    imageUrl: templateItem.image_url,
                    sku: templateItem.sku,
                    price: templateItem.price,
                    category: {
                        id: category.id,
                        name: category.name,
                        imageUrl: category.image_url,
                    }
                });
            }

            res.status(200).send({ success: true, items: productTemplateItems });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};

function generateCombinations(attributes) {
    if (attributes.length === 0) {
        return [[]];
    }

    const [current, ...remaining] = attributes;
    const remainingCombinations = generateCombinations(remaining);

    const combinations = [];
    for (const value of current.values) {
        for (const combination of remainingCombinations) {
            combinations.push([{ attr_id: current.attr_id, value }, ...combination]);
        }
    }

    return combinations;
}

exports.createProduct = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    const transaction = await sequelize.transaction();

    var productBody = {
        name: body.name,
        price: body.price,
        sku: body.sku,
        category_id: body.category_id,
        standard_price: body.standard_price,
        description: body.description,
        image_url: body.image_url,
        active: body.active || true,
        sequence: body.sequence || 10,
    };

    const variantCombinations = generateCombinations(body.attributes)

    try {
        // create product template
        const template = await ProductTemplate.create(productBody);
        var attributeIds = []
        for (let i = 0; i < body.attributes.length; i++) {
            const attributeId = body.attributes[i]['attr_id'];
            attributeIds.push({
                attr_id: attributeId,
                tmpl_id: template.id,
                active: true,
            });
        }

        // create product template attributes
        const attrs = await ProductTemplateAttribute.bulkCreate(attributeIds);
        var attributeValues = []
        for (let i = 0; i < attrs.length; i++) {
            const attr = attrs[i];
            // search on body.attributes dict to get matched with attr.attr_id
            const matchedItems = body.attributes.filter(item => item.attr_id == attr.attr_id).reduce((arrays, obj) => {
                obj.values.forEach(value_id => {
                    arrays.push(value_id);
                });
                return arrays;
            }, []);

            matchedItems.forEach(attributeValue => {
                attributeValues.push({
                    value_id: attributeValue,
                    product_tmpl_attr_id: attr.id,
                    active: true,
                });
            });
        }

        // create product template attribute values
        await ProductTemplateAttributeValue.bulkCreate(attributeValues);

        // create product variants
        var variants = [];
        for (let i = 0; i < variantCombinations.length; i++) {
            var myTemplateData = productBody;
            myTemplateData.template_id = template.id;
            variants.push(myTemplateData);
        }

        // create product variant attribute values
        const variantItems = await ProductVariant.bulkCreate(variants);
        var variantAttributeValues = [];
        for (let i = 0; i < variantItems.length; i++) {
            const variantItem = variantItems[i];
            const variantCombination = variantCombinations[i];
            variantCombination.forEach(combination => {
                variantAttributeValues.push({
                    variant_id: variantItem.id,
                    attr_value_id: combination.value,
                    attr_id: combination.attr_id,
                    active: true,
                });
            });
        }

        await ProductVariantAttributeValue.bulkCreate(variantAttributeValues);

        // commit transaction
        await transaction.commit();

        res.send({
            success: true,
            message: "Record Created successfully!"
        });
    } catch (err) {
        await transaction.rollback();
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.createVariantCustomFields = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });

    }

    ProductCustomFields.create(req.body)
        .then(data => {
            res.send({
                success: true,
                message: "Record Created successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });

};

exports.createCustomerFeedback = async (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).send({
            success: false,
            message: "Request body cannot be empty."
        });

    }

    CustomerFeedback.create(req.body)
        .then(data => {
            res.send({
                success: true,
                message: "Record Created successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });

};

exports.getProductVariants = async (req, res) => {
    const params = req.params;
    if (!params.templateId) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    try {
        const productVariantsQuery = `
        select pp.id, pp.name as variant_name, pp.description, pvav.id as variant_line_id, pa.id as attr_id, pa.name, pa.display_type, pav.id as value_id, pav.value 
        from product_products as pp 
        left join product_variant_attribute_values pvav on pvav.variant_id=pp.id 
        left join product_attributes pa on pa.id=pvav.attr_id 
        left join product_attribute_values pav on pav.id=pvav.attr_value_id 
        where pp.template_id=:template_id
        order by pp.id;        
        `

        const variantCustomFieldsQuery = `select name, is_required, placeholder, input_type, variant_id from product_custom_fields where variant_id in (:variant_ids);`

        const variantRatingsQuery = `select variant_id, avg(rating) as rating_avg from customer_feedbacks where variant_id in (:variant_ids) group by variant_id;`

        const data = await sequelize.query(
            productVariantsQuery,
            {
                replacements: { template_id: params.templateId },
                type: sequelize.QueryTypes.SELECT
            }
        );

        // Grouping the data by variant_id
        const groupedData = data.reduce((result, item) => {
            const { id } = item;

            if (!result[id]) {
                result[id] = {
                    id,
                    name: item.variant_name,
                    description: item.description,
                    attributes: [],
                    customFields: [],
                    ratings: [],
                };
            }

            result[id].attributes.push({
                attr_id: item.attr_id,
                name: item.name,
                display_type: item.display_type,
                value_id: item.value_id,
                value: item.value,
            });

            return result;
        }, {});

        // Get ratings for each variant
        const variantIds = Object.keys(groupedData);
        const customFields = await sequelize.query(
            variantCustomFieldsQuery,
            {
                replacements: { variant_ids: variantIds },
                type: sequelize.QueryTypes.SELECT
            }
        );

        const ratings = await sequelize.query(
            variantRatingsQuery,
            {
                replacements: { variant_ids: variantIds },
                type: sequelize.QueryTypes.SELECT
            }
        );

        // Add custom fields to each variant
        for (let i = 0; i < customFields.length; i++) {
            const customField = customFields[i];
            const variantId = customField.variant_id;
            const variant = groupedData[variantId];
            variant.customFields.push(customField);
        }

        // Add ratings to each variant
        for (let i = 0; i < ratings.length; i++) {
            const rating = ratings[i];
            const variantId = rating.variant_id;
            const variant = groupedData[variantId];
            variant.ratings.push(rating);
        }

        res.status(200).send({ success: true, items: groupedData });
    } catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};

exports.updateProduct = (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    var values = {};
    if (body.active) {
        values.active = body.active;
    }
    if (body.sequence) {
        values.sequence = body.sequence;
    }
    if (body.name) {
        values.name = body.name;
    }
    if (body.imageUrl) {
        values.image_url = body.imageUrl;
    }

    ProductTemplate.update(values, {
        where: {
            id: body.id
        }
    })
        .then(_ => {
            res.send({
                success: true,
                message: "Record updated successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};

exports.deleteProduct = (req, res) => {
    const body = req.body;
    if (!body.id) {
        return res.status(204).send({
            success: false,
            message: "Request body cannot be empty."
        });
    }

    ProductTemplate.destroy({
        where: {
            id: body.id
        }
    })
        .then(_ => {
            res.send({
                success: true,
                message: "Record deleted successfully!"
            });
        })
        .catch(err => {
            res.status(500).send({ success: false, message: err.message });
        });
};