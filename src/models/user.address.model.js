module.exports = (sequelize, Sequelize) => {
    const UserAddress = sequelize.define("user_address", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        state_id: {
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        },
        mobile: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        address_type: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    });

    return UserAddress;
};

