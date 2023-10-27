module.exports = (sequelize, Sequelize) => {
    const ProductTemplateAttribute = sequelize.define("product_template_attributes", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        attr_id: {
            type: Sequelize.INTEGER,
        },
        tmpl_id: {
            type: Sequelize.INTEGER
        },
    });

    return ProductTemplateAttribute;
}