module.exports = (sequelize, Sequelize) => {
    const ProductTemplateAttributeValue = sequelize.define("product_template_attribute_value", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        product_tmpl_attr_id: {
            type: Sequelize.INTEGER,
        },
        value_id: {
            type: Sequelize.INTEGER
        },
    });

    return ProductTemplateAttributeValue;
}