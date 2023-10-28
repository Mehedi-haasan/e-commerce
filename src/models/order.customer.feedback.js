module.exports = (sequelize, Sequelize) => {
    const CustomerFeedback = sequelize.define("customer_feedback", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        variant_id: {
            type: Sequelize.INTEGER,
        },
        order_id: {
            type: Sequelize.INTEGER
        },
        rating: {
            type:  Sequelize.DECIMAL(10, 2)
        },
        note: {
            type: Sequelize.STRING
        },
    });

    return CustomerFeedback;
};
