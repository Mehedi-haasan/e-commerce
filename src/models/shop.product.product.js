module.exports = (sequelize, Sequelize) => {
    const ProductProduct = sequelize.define("product_product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        sequence: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.STRING
        },
        price:{
            type: Sequelize.DECIMAL(10, 4)
        },
        standard_price:{
            type: Sequelize.DECIMAL(10, 4)
        },
        sku:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.TEXT
        },
        category_id:{
            type: Sequelize.INTEGER,
        },
        template_id:{
            type: Sequelize.INTEGER,
        },
    });

    return ProductProduct;
};
