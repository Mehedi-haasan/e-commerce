module.exports = (sequelize, Sequelize) => {
    const SaleOrderLine = sequelize.define("sale_order_line", {
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
        name: {
            type: Sequelize.STRING,
        },
        custom_values: {
            type: Sequelize.STRING,
        },
        order_id: {
            type: Sequelize.INTEGER
        },
        product_qty: {
            type: Sequelize.INTEGER
        },
        price_unit: {
            type: Sequelize.DECIMAL(10, 4)
        },
        subtotal: {
            type: Sequelize.DECIMAL(10, 2)
        }
    });

    return SaleOrderLine;
};
