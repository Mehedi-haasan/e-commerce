module.exports = (sequelize, Sequelize) => {
    const ProductVariantAttributeValue = sequelize.define("product_variant_attribute_value", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        attr_id: {
            type: Sequelize.INTEGER
        },
        attr_value_id:{
            type: Sequelize.INTEGER,
        },
        variant_id:{
            type: Sequelize.INTEGER,
        },
    });

    return ProductVariantAttributeValue;
}