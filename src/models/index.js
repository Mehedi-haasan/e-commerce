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

// product and variants
db.productCategory = require("./shop.product.category.js")(sequelize, Sequelize);
db.productTemplate = require("./shop.product.template.js")(sequelize, Sequelize);
db.productAttribute = require("./shop.product.attribute.js")(sequelize, Sequelize);
db.productAttributeValue = require("./shop.product.attribute.value.js")(sequelize, Sequelize);
db.productTemplateAttribute = require("./shop.product.template.attribute.js")(sequelize, Sequelize);
db.productTemplateAttributeValue = require("./shop.product.template.attribute.values.js")(sequelize, Sequelize);
db.productVariant = require("./shop.product.product.js")(sequelize, Sequelize);
db.productVariantAttributeValue = require("./shop.product.variant.attribute.values.js")(sequelize, Sequelize);
db.productCustomFields = require("./shop.product.custom.fields.js")(sequelize, Sequelize);

// alternate products suggestions
// db.productAlternateProduct = require("./shop.product.alternate.product.js")(sequelize, Sequelize);

// product campaign
db.productCampaign = require("./shop.product.campaign.js")(sequelize, Sequelize);
db.productCampaignLine = require("./shop.product.campaign.line.js")(sequelize, Sequelize);

// order and delivery
db.saleOrder = require("./order.sale.order.js")(sequelize, Sequelize);
db.saleOrderLine = require("./order.sale.order.line.js")(sequelize, Sequelize);

// ratings and reviews
db.customerFeedback = require("./order.customer.feedback.js")(sequelize, Sequelize);


// relations between tables

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
db.productTemplate.hasMany(db.productVariant, {
  foreignKey: 'template_id'
})

db.productVariantAttributeValue.belongsTo(db.productVariant, {
  foreignKey: "variant_id"
})
db.productVariant.hasMany(db.productVariantAttributeValue, {
  foreignKey: "variant_id"
})

db.productAttribute.belongsTo(db.productVariantAttributeValue, {
  foreignKey: "attr_id"
})
db.productVariantAttributeValue.hasMany(db.productAttribute, {
  foreignKey: "attr_id"
})

db.productAttributeValue.belongsTo(db.productVariantAttributeValue, {
  foreignKey: "attr_value_id"
})
db.productVariantAttributeValue.hasMany(db.productAttributeValue, {
  foreignKey: "attr_value_id"
})

db.productCustomFields.belongsTo(db.productVariant, {
  foreignKey: "variant_id"
})
db.productVariant.hasMany(db.productCustomFields, {
  foreignKey: "variant_id"
})

// a variant can have multiple alternate product templates
db.productVariant.belongsToMany(db.productTemplate, {
  through: "product_variant_alternate_products"
})
db.productTemplate.belongsToMany(db.productVariant, {
  through: "product_variant_alternate_products"
})

db.productCampaignLine.belongsTo(db.productCampaign, {
  foreignKey: "campaign_id"
})
db.productCampaign.hasMany(db.productCampaignLine, {
  foreignKey: "campaign_id"
})

db.saleOrderLine.belongsTo(db.saleOrder, {
  foreignKey: "order_id"
})
db.saleOrder.hasMany(db.saleOrderLine, {
  foreignKey: "order_id"
})

db.user.hasMany(db.saleOrder, {
  foreignKey: "user_id"
})
db.saleOrder.belongsTo(db.user, {
  foreignKey: "user_id"
})

db.saleOrderLine.belongsTo(db.productVariant, {
  foreignKey: "variant_id"
})
db.productVariant.hasMany(db.saleOrderLine, {
  foreignKey: "variant_id"
})

db.saleOrderLine.belongsTo(db.user, {
  foreignKey: "user_id"
})
db.user.hasMany(db.saleOrderLine, {
  foreignKey: "user_id"
})

db.customerFeedback.belongsTo(db.saleOrder, {
  foreignKey: "order_id"
})
db.saleOrder.hasMany(db.customerFeedback, {
  foreignKey: "order_id"
})

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;