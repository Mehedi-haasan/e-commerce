module.exports = (sequelize, Sequelize) => {
    const SaleOrder = sequelize.define("sale_order", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        delivery_address_id: {
            type: Sequelize.INTEGER,
        },
        shipping_address_id: {
            type: Sequelize.INTEGER,
        },
        shipping_method: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        total: {
            type: Sequelize.DECIMAL(10, 2)
        },
        subtotal: {
            type: Sequelize.DECIMAL(10, 2)
        },
        tax: {
            type: Sequelize.DECIMAL(10, 2)
        },
        discount: {
            type: Sequelize.DECIMAL(10, 2)
        },
        delivery_charge: {
            type: Sequelize.DECIMAL(10, 2)
        },
    });

    return SaleOrder;
};
