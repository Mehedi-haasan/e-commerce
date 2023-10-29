module.exports = (sequelize, Sequelize) => {
    const ProductCampaignLine = sequelize.define("product_campaign_line", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        campaign_id:{
            type: Sequelize.INTEGER,
        },
        product_id:{
            type: Sequelize.INTEGER,
        },
        discount:{
            type: Sequelize.INTEGER,
        },
    });

    return ProductCampaignLine;
};
