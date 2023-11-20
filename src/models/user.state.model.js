module.exports = (sequelize, Sequelize) => {
    const States = sequelize.define("states", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        state_code: {
            type: Sequelize.STRING
        },
        delivery_charge: {
            type: Sequelize.DECIMAL(10, 2)
        }
    });

    return States;
};

