const config = require("../config/db.config.js");

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

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.carousel = require("./shop.carousel.js")(sequelize, Sequelize);
db.productCategory = require("./shop.product.category.js")(sequelize, Sequelize);
db.productTemplate = require("./shop.product.template.js")(sequelize, Sequelize);
db.productAttribute = require("./shop.product.attribute.js")(sequelize, Sequelize);
db.productAttributeValue = require("./shop.product.attribute.value.js")(sequelize, Sequelize);
db.productTemplateAttribute = require("./shop.product.template.attribute.js")(sequelize, Sequelize);
db.productTemplateAttributeValue = require("./shop.product.template.attribute.values.js")(sequelize, Sequelize);
db.productVariant = require("./shop.product.product.js")(sequelize, Sequelize);
db.productVariantAttributeValue = require("./shop.product.variant.attribute.values.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});

db.productAttributeValue.belongsTo(db.productAttribute, {
  foreignKey: "attr_id"
})
db.productAttribute.hasMany(db.productAttributeValue, {
  foreignKey: "attr_id"
})

db.productTemplateAttribute.belongsTo(db.productTemplate, {
  foreignKey: "tmpl_id"
})
db.productTemplate.hasMany(db.productTemplateAttribute, {
  foreignKey: "tmpl_id"
})

db.productTemplate.belongsTo(db.productCategory, {
  foreignKey: "category_id"
})
db.productCategory.hasMany(db.productTemplate, {
  foreignKey: "category_id"
})


db.productAttribute.belongsTo(db.productTemplateAttribute, {
  foreignKey: "attr_id"
})
db.productTemplateAttribute.hasMany(db.productVariant, {
  foreignKey: 'attr_id'
})

db.productTemplateAttributeValue.belongsTo(db.productTemplateAttribute, {
  foreignKey: "product_tmpl_attr_id"
})
db.productTemplateAttribute.hasMany(db.productVariant, {
  foreignKey: 'product_tmpl_attr_id'
})

db.productVariant.belongsTo(db.productTemplate, {
  foreignKey: 'template_id'
})


db.productVariantAttributeValue.belongsTo(db.productVariant, {
  foreignKey: "variant_id"
})
db.productVariant.hasMany(db.productVariantAttributeValue, {
  foreignKey: "variant_id"
})


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;