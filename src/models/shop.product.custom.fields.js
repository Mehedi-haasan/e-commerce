module.exports = (sequelize, Sequelize) => {
    const ProductCustomFields = sequelize.define("product_custom_fields", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        variant_id: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        is_required: {
            type: Sequelize.BOOLEAN
        },
        placeholder: {
            type: Sequelize.STRING
        },
        input_type: {
            type: Sequelize.STRING
        },
    });

    return ProductCustomFields;
};
