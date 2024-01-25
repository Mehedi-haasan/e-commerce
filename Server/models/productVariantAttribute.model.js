module.exports = (sequelize, Sequelize) => {
    const ProductVariantAttribute = sequelize.define("product_variant_attribute", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        name: {
            type: Sequelize.STRING
        },
    });

    return ProductVariantAttribute;
};
