module.exports = (sequelize, Sequelize) => {
    const ProductAttribute = sequelize.define("product_attribute", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        name: {
            type: Sequelize.STRING
        },
        display_type: {
            type: Sequelize.STRING
        },
    });

    return ProductAttribute;
};
