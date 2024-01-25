module.exports = (sequelize, Sequelize) => {
    const ProductTemplate = sequelize.define("product_template", {
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
        category_id:{
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.TEXT
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
        product_type:{
            type: Sequelize.BOOLEAN,
        },
    });

    return ProductTemplate;
};
