
CREATE DATABASE mahlun_shop;

user type 0 means cuatomer and 
user type 2 means super admin
user type 1 means maneger


CREATE TABLE IF NOT EXISTS res_user(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    active int DEFAULT 1,
    name varchar(100) NOT NULL,
    login varchar(150) NOT NULL,
    password varchar(255) not NULL,
    mobile varchar(30),
    user_type int DEFAULT 0,
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



Contact type can be deivery_address,shipping_addresss

CREATE TABLE IF NOT EXISTS res_partner(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    active int DEFAULT 1,
    name varchar(100) NOT NULL,
    email varchar(100),
    mobile varchar(30),
    contact_type varchar(15),
    user_id int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS product_category(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     active int DEFAULT 1,
     name varchar(225),
     image_url text,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



CREATE TABLE IF NOT EXISTS product_template(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     active int DEFAULT 1,
     access_token binary(16) default (uuid_to_bin(uuid())) not null UNIQUE,
     name varchar(255),
     image_url text,
     price decimal(10, 4),
     standard_price decimal(10, 4),
     sku varchar(30),
     description text,
     category_id int,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     CONSTRAINT fk_product_tmpl_category FOREIGN KEY(category_id) REFERENCES product_category(id)

);




CREATE TABLE IF NOT EXISTS product_attribute(
   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
   active int DEFAULT 1,
   tmpl_id INT,
   name varchar(50),
   display_name varchar(100),
   display_type varchar(30),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   CONSTRAINT fk_product_attr_tmpl FOREIGN KEY(tmpl_id) REFERENCES product_template(id) ON DELETE RESTRICT
);



CREATE TABLE IF NOT EXISTS product_attribute_value(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     active int DEFAULT 1,
     value varchar(225),
     attribute_id int,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     CONSTRAINT fk_product_attr_value FOREIGN KEY(attribute_id) REFERENCES product_attribute(id) ON DELETE RESTRICT
);



















CREATE TABLE IF NOT EXISTS product_variant(
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     active int DEFAULT 1,
     access_token binary(16) default (uuid_to_bin(uuid())) not null UNIQUE,
     tmpl_id int,
     name varchar(225),
     image_url text,
     description text,
     price decimal(10, 4),
     standard_price decimal(10, 4),
     sku varchar(30),
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     CONSTRAINT fk_product_variant_tmpl FOREIGN KEY(tmpl_id) REFERENCES product_template(id) ON DELETE RESTRICT
);


CREATE TABLE IF NOT EXISTS product_variant_attribute_value(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    active int DEFAULT 1,
    variant_id int,
    attr_value_id int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT variant_attr_unique UNIQUE (variant_id,attr_value_id),
    CONSTRAINT fk_product_attr_variant_value FOREIGN KEY(variant_id) REFERENCES product_variant(id) ON DELETE RESTRICT,
    CONSTRAINT fk_product_attr_attr_value FOREIGN KEY(attr_value_id) REFERENCES product_attribute(id) ON DELETE RESTRICT

);


CREATE TABLE IF NOT EXISTS tax(
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    active int DEFAULT 1,
    name varchar(100),
    display_name varchar(100),
    type varchar(15),
    rate decimal(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS shipping_method(
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    active int DEFAULT 1,
    name varchar(100),
    display_name varchar(100),
    type varchar(15),
    rate decimal(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS sale_order(
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    active int DEFAULT 1,
    user_id int NOT NULL,
    access_token binary(16) default (uuid_to_bin(uuid())) not null UNIQUE,
    order_status varchar(50),
    delivery_address_id int,
    shipping_addresss_id int,
    shipping_method_id int,
    untaxed_total decimal(10, 2),
    taxed_total decimal(10, 2),
    total_price decimal(10, 2),
    discount_total decimal(10, 2),
    delivery_charge decimal(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_sale_order_res_user FOREIGN KEY(user_id) REFERENCES res_user(id) ON DELETE RESTRICT,
    CONSTRAINT fk_sale_order_res_partner_delivery FOREIGN KEY(delivery_address_id) REFERENCES res_partner(id) ON DELETE SET NULL,
    CONSTRAINT fk_sale_order_res_partner_shipping FOREIGN KEY(shipping_addresss_id) REFERENCES res_partner(id) ON DELETE SET NULL,
    CONSTRAINT fk_sale_order_shipping_method FOREIGN KEY(shipping_method_id) REFERENCES shipping_method(id) ON DELETE SET NULL
);


CREATE TABLE IF NOT EXISTS sale_order_line(
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    active int DEFAULT 1,
    user_id int NOT NULL,
    order_id int NOT NULL,
    product_id int NOT NULL,
    name varchar(150),
    unit_price decimal(10, 2) NOT NULL,
    product_qty int NOT NULL,
    discount decimal(10, 2),
    is_delivery int DEFAULT 0,
    price_subtotal decimal(10, 2),
    tax_id int,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_order_line_res_user FOREIGN KEY(user_id) REFERENCES res_user(id) ON DELETE RESTRICT,
    CONSTRAINT fk_order_line_sale_order FOREIGN KEY(order_id) REFERENCES sale_order(id) ON DELETE RESTRICT,
    CONSTRAINT fk_order_line_product_variant FOREIGN KEY(product_id) REFERENCES product_variant(id) ON DELETE RESTRICT,
    CONSTRAINT fk_order_line_tax FOREIGN KEY(tax_id) REFERENCES tax(id) ON DELETE set null
   
);


