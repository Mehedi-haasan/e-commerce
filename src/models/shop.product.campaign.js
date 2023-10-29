module.exports = (sequelize, Sequelize) => {
    const ProductCampaign = sequelize.define("product_campaign", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        name:{
            type: Sequelize.STRING
        },
        date_start: {
            type: Sequelize.DATEONLY
        },
        date_end: {
            type: Sequelize.DATEONLY
        },
        image_url: {
            type: Sequelize.STRING
        }
    });

    return ProductCampaign;
};
