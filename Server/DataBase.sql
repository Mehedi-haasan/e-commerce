Creating table for image

CREATE TABLE image(
    id serial PRIMARY Key NOT NULL,
    image jsonb[],
);
insert into image (image) values (ARRAY[
     '{"image": "https://img.freepik.com/premium-photo/standard-extended-generic-modern-smart-wearable-watch-wide-banner-with-blank-screen-mockup_870512-2242.jpg"}'::jsonb,
     '{"image": "https://img.freepik.com/premium-photo/ai-generated-illustration-wireless-smart-watch-isolated-white-background_441362-5464.jpg"}'::jsonb,
     '{"image": "https://img.freepik.com/premium-photo/purple-smart-tracker-watch-isolated-white-background_927367-1962.jpg"}'::jsonb,
	 '{"image": "https://img.freepik.com/premium-photo/generic-smartwatches-isolated-colorfull-background-3d-illustration_960782-6400.jpg"}'::jsonb]
	);
========================
Creating table for Colour

CREATE TABLE color(
    id serial PRIMARY Key NOT NULL,
    colour jsonb[]
);
insert into color (colour) values (ARRAY[
     '{"name": "Red","type":"Colour","value":"Red"}'::jsonb,
     '{"name": "White","type":"Colour","value":"White"}'::jsonb,
     '{"name": "Black","type":"Colour","value":"Black"}'::jsonb]
	);
========================
Creating table for Size

CREATE TABLE size(
    id serial PRIMARY Key NOT NULL,
    size jsonb[]
);
insert into size (size) values (ARRAY[
     '{"size": "25 Diamonds","price":35}'::jsonb,
     '{"size": "50 Diamonds","price":60}'::jsonb,
     '{"size": "120 Diamonds","price":75}'::jsonb,
	 '{"size": "300 Diamonds","price":140}'::jsonb]
	);

========================
Creating table for Rules

CREATE TABLE rule(
    id serial PRIMARY Key NOT NULL,
    rule jsonb[]
);
insert into rule (rule) values (ARRAY[
     '{"rule": "1 Screen (Personal)"}'::jsonb,
     '{"rule": "Personal Locked Profile"}'::jsonb,
     '{"rule": " Renewable (Renew@299/-)"}'::jsonb,
	 '{"rule": "2 Device Login (1 at a Time)"}'::jsonb]
	);

========================
Creating table for Input

CREATE TABLE input(
    id serial PRIMARY Key NOT NULL,
    input jsonb[]
);

insert into input (input) values (ARRAY[
     '{"name": "Username","type":"text","value":"Enter your Username"}'::jsonb,
     '{"name": "Phone","type":"text","value":"Enter your Phone"}'::jsonb,
     '{"name": "Email","type":"email","value":"Enter your email"}'::jsonb]
	);
========================
Creating table for Product

CREATE TABLE product (
    id serial PRIMARY Key NOT NULL,
    heading varchar(255),
    discount int,
    price int,
    category varchar(150),
    image int ,
    size int,
    color int, 
    rule int, 
    input int, 
    rating int,
    stock int,
    FOREIGN Key(image) REFERENCES image(id),
    FOREIGN Key(size) REFERENCES size(id),
    FOREIGN Key(color) REFERENCES color(id),
    FOREIGN Key(rule) REFERENCES rule(id),
    FOREIGN Key(input) REFERENCES input(id),
);

insert into product (heading,discount,price,category,image,size,color,rule,input,rating,stock) 
values('Smart Watch',5,2499,'Watch',1,1,1,1,1,4,1);


========================
Create table for cart

CREATE TABLE cart (
    id int not null,
    discount int,
    heading varchar(255),
    price int,
    quantity int,
    image text,
    colour varchar(100),
    size varchar(100),
    input text[],
    category varchar(200),
    email varchar(255),
    name varchar(100),
    player_id varchar(30),
    );
    
========================
Add new column for cart table

ALTER TABLE cart
ADD total_price int;





   CREATE TABLE pt(
       t_id INT PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       description TEXT
   );

INSERT INTO pt (name, description) VALUES
   ('Shirt Template', 'A template for creating shirt products'),
   ('Shoe Template', 'A template for creating shoe products');



========================

   CREATE TABLE pa (
       a_id INT PRIMARY KEY AUTO_INCREMENT,
       t_id INT NOT NULL,
       name VARCHAR(255) NOT NULL,
       data_type VARCHAR(50) NOT NULL, -- e.g., text, number, color, size, etc.
       FOREIGN KEY (t_id) REFERENCES pt (t_id)
   );


INSERT INTO pa (t_id, name, data_type) VALUES
   (1, 'Color', 'text'),
   (1, 'Size', 'text'),
   (2, 'Color', 'text'),
   (2, 'Size', 'text'),
   (2, 'Material', 'text');   

========================


CREATE TABLE pav (
       v_id INT PRIMARY KEY AUTO_INCREMENT,
       a_id INT NOT NULL,
       value VARCHAR(255) NOT NULL,
       FOREIGN KEY (a_id) REFERENCES pa (a_id)
   );

INSERT INTO pav (a_id, value) VALUES
   (1, 'Red'),(1, 'Blue'),(1, 'Green'),(2, 'Small'),(2, 'Medium'),
   (2, 'Large'),(3, 'Black'),(3, 'White'),(4, 'Small'),(4, 'Medium'),(4, 'Large'),(5, 'Leather'),(5, 'Canvas');  

========================


CREATE TABLE pv (
       va_id INT PRIMARY KEY AUTO_INCREMENT,
       t_id INT NOT NULL,
       name VARCHAR(255) NOT NULL,
       description TEXT,
       FOREIGN KEY (t_id) REFERENCES pt (t_id)
   );
   
INSERT INTO pv (t_id, name, description) VALUES
   (1, 'Red Shirt', 'A red shirt variant'),
   (1, 'Blue Shirt', 'A blue shirt variant'),
   (2, 'Black Shoes', 'A pair of black shoes'),
   (2, 'White Shoes', 'A pair of white shoes');   


========================


CREATE TABLE pvav (
       va_id INT NOT NULL,
       a_id INT NOT NULL,
       v_id INT NOT NULL,
       PRIMARY KEY (va_id, a_id),
       FOREIGN KEY (va_id) REFERENCES pv (va_id),
       FOREIGN KEY (a_id) REFERENCES pa (a_id),
       FOREIGN KEY (v_id) REFERENCES pav (v_id)
   );

INSERT INTO pvav (va_id, a_id, v_id) VALUES
   (1, 1, 1),  -- Red Shirt - Color: Red
   (1, 2, 4),  -- Red Shirt - Size: Small
   (2, 1, 2),  -- Blue Shirt - Color: Blue
   (2, 2, 5),  -- Blue Shirt - Size: Medium
   (3, 1, 7),  -- Black Shoes - Color: Black
   (3, 4, 11), -- Black Shoes - Material: Leather
   (4, 1, 8),  -- White Shoes - Color: White
   (4, 4, 12); -- White Shoes - Material: Canvas
   
select pvav.va_id, pvav.a_id, pvav.v_id, pv.name, pav.value, pv.description from pvav left join pv on pvav.va_id = pv.va_id left join pav on pv.va_id = pav.a_id;


SELECT pvav.variant_id as variant_id ,pvav.attribute_id as attribute_id,pvav.value_id as variant_value,pv.template_id,pv.name as variant_name,pv.description, pav.value as colour,pa.name Type,pa.data_type,pt.name,pt.description FROM product_variant_attribute_values as pvav LEFT JOIN product_variants as pv ON pvav.variant_id = pv.variant_id LEFT JOIN product_attribute_values as pav ON pv.variant_id = pav.attribute_id left join product_attributes as pa on pav.attribute_id = pa.attribute_id left join product_templates as pt on pa.attribute_id = pt.template_id where pvav.value_id=4;


======================================================
product_template
product_varient
stock

product_attribute

=====================

CREATE TABLE product_attribute (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    type varchar(255),
    CONSTRAINT pk_product_attribute PRIMARY KEY (id) 
);

=====================

CREATE TABLE product_attribute_value (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    type varchar(255),
    color varchar(255),
    attribute_id int,
    sequence int,
    PRIMARY KEY (id)
);

ALTER TABLE product_attribute_value
ADD CONSTRAINT fk_product_attribute_value
FOREIGN KEY (attribute_id) REFERENCES product_attribute(id);

=====================
CREATE TABLE product_template (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    price int,
    active int,
    is_published int,
    website_url text,
    CONSTRAINT pk_product_template PRIMARY KEY (id) 
);

========================
Update To store product template id

ALTER TABLE product_attribute
ADD product_template_id int;

===============
Add Foreign Key with Product Attribute and Product Template

ALTER TABLE product_attribute
ADD CONSTRAINT fk_producttemplate_product_attribute
FOREIGN KEY (product_template_id) REFERENCES product_template(id);


select pt.id, pt.name, pt.price,pt.active,pa.name as variant_name,pa.type as variant_type,pav.name as attr_name,pav.type as attr_type,pav.color as attr_value from product_template pt left join product_attribute pa on pa.product_template_id=pt.id left join product_attribute_value pav on pav.attribute_id=pa.id;


ALTER TABLE product_templates
ADD CONSTRAINT fk_product_templates_category
FOREIGN KEY (category_id) REFERENCES product_category(id);



ALTER TABLE  product_templates add column category_id int;

create_by user_id
write_by user_id
create_date datetime
write_date datetime on update current_datetime
active 0/1 default 1


ALTER TABLE product_category
ALTER active SET DEFAULT 1;


insert into product_category(name,image_url) values('T-Shirt','https://img.freepik.com/free-photo/black-shirt-with-word-ultra-it_1340-37775.jpg'),('Formal-Shirt','https://img.freepik.com/premium-photo/black-tee-urban-brick-setting_795881-10301.jpg'),
('Pant','https://img.freepik.com/premium-photo/tshirt-design-ai-generated_950989-105.jpg');


select pc.image_url,pc.name,pc.id from product_category as pc;