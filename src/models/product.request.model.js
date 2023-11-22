module.exports = (sequelize, Sequelize) => {
    const ProductRequest = sequelize.define("product_request", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active:{
            type: Sequelize.BOOLEAN,
            defaultValue: true,
        },
        name: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        reference: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
    });

    return ProductRequest;
};

