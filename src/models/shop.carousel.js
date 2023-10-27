module.exports = (sequelize, Sequelize) => {
    const Carousel = sequelize.define("carousel", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        active: {
            type: Sequelize.BOOLEAN,
        },
        sequence: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        image_url: {
            type: Sequelize.STRING
        }
    });

    return Carousel;
};