module.exports = (sequelize, Sequelize) => {
    const CustomerFeedback = sequelize.define("company_profile", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        contact_mobile: {
            type: Sequelize.STRING
        },
        contact_email: {
            type: Sequelize.STRING
        },
        contact_address: {
            type: Sequelize.STRING
        },
        fb_url: {
            type: Sequelize.STRING
        },
        yt_url: {
            type: Sequelize.STRING
        },
        insta_url: {
            type: Sequelize.STRING
        },
        twit_url: {
            type: Sequelize.STRING
        },
        wp_url: {
            type: Sequelize.STRING
        },
        tele_url: {
            type: Sequelize.STRING
        },
    });

    return CustomerFeedback;
};
