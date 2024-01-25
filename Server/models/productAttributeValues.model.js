module.exports = (sequelize, Sequelize) => {
    const ProductAttributeValue = sequelize.define("product_attribute_value", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        attr_id: {
            type: Sequelize.INTEGER,
        },
        value: {
            type: Sequelize.STRING
        },
    });

    return ProductAttributeValue;
}