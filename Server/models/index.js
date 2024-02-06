const config = require("../config/db.config");





const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);
db.productCategory = require("./productCategory.model")(sequelize, Sequelize);
db.productTemplete = require("./productTemplete.model")(sequelize, Sequelize);
db.productVariant = require("./productVariant.model")(sequelize, Sequelize);
db.ProductAttribute = require("./ProductAttribute.model")(sequelize, Sequelize);




// relation between tables

db.productTemplete.hasMany(db.productVariant,{
  foreignKey:"template_id"
})
db.productVariant.belongsTo(db.productTemplete,{
  foreignKey:"template_id"
})


db.productVariant.hasMany(db.ProductAttribute,{
  foreignKey:"variant_id"
})
db.ProductAttribute.belongsTo(db.productVariant,{
  foreignKey:"variant_id"
})



module.exports = db;