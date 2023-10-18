   CREATE TABLE product_templates (
       template_id INT PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       description TEXT,
   );

INSERT INTO product_templates (name, description) VALUES
   ('Shirt Template', 'A template for creating shirt products'),
   ('Shoe Template', 'A template for creating shoe products');
;
========================

   CREATE TABLE product_attributes (
       attribute_id INT PRIMARY KEY AUTO_INCREMENT,
       template_id INT NOT NULL,
       name VARCHAR(255) NOT NULL,
       data_type VARCHAR(50) NOT NULL, -- e.g., text, number, color, size, etc.
       FOREIGN KEY (template_id) REFERENCES product_templates (template_id)
   );

INSERT INTO product_attributes (template_id, name, data_type) VALUES
   (1, 'Color', 'text'),
   (1, 'Size', 'text'),
   (2, 'Color', 'text'),
   (2, 'Size', 'text'),
   (2, 'Material', 'text');   

========================
;
CREATE TABLE product_attribute_values (
       value_id INT PRIMARY KEY AUTO_INCREMENT,
       attribute_id INT NOT NULL,
       value VARCHAR(255) NOT NULL,
       FOREIGN KEY (attribute_id) REFERENCES product_attributes (attribute_id)
   );

INSERT INTO product_attribute_values (attribute_id, value) VALUES
   (1, 'Red'),(1, 'Blue'),(1, 'Green'),(2, 'Small'),(2, 'Medium'),
   (2, 'Large'),(3, 'Black'),(3, 'White'),(4, 'Small'),(4, 'Medium'),(4, 'Large'),(5, 'Leather'),(5, 'Canvas');  


INSERT INTO product_attribute_values (attribute_id, value) VALUES
   (1, 'Red'),(1, 'Blue'),(1, 'Green'),(2, 'Small'),(2, 'Medium'),
   (2, 'Large'),(3, 'Black'),(3, 'White'),(4, 'Small'),(4, 'Medium'),(4, 'Large'),(5, 'Leather'),(5, 'Canvas'); 
========================
;
CREATE TABLE product_variants (
       variant_id INT PRIMARY KEY AUTO_INCREMENT,
       template_id INT NOT NULL,
       name VARCHAR(255) NOT NULL,
       description TEXT,
       FOREIGN KEY (template_id) REFERENCES product_templates (template_id)
   );
   
INSERT INTO product_variants (template_id, name, description) VALUES
   (1, 'Red Shirt', 'A red shirt variant'),
   (1, 'Blue Shirt', 'A blue shirt variant'),
   (2, 'Black Shoes', 'A pair of black shoes'),
   (2, 'White Shoes', 'A pair of white shoes');   
;
========================
;
CREATE TABLE product_variant_attribute_values (
       variant_id INT NOT NULL,
       attribute_id INT NOT NULL,
       value_id INT NOT NULL,
       PRIMARY KEY (variant_id, attribute_id),
       FOREIGN KEY (variant_id) REFERENCES product_variants (variant_id),
       FOREIGN KEY (attribute_id) REFERENCES product_attributes (attribute_id),
       FOREIGN KEY (value_id) REFERENCES product_attribute_values (value_id)
   );

INSERT INTO product_variant_attribute_values (variant_id, attribute_id, value_id) VALUES
   (1, 1, 1),  -- Red Shirt - Color: Red
   (1, 2, 4),  -- Red Shirt - Size: Small
   (2, 1, 2),  -- Blue Shirt - Color: Blue
   (2, 2, 5),  -- Blue Shirt - Size: Medium
   (3, 1, 7),  -- Black Shoes - Color: Black
   (3, 4, 11), -- Black Shoes - Material: Leather
   (4, 1, 8),  -- White Shoes - Color: White
   (4, 4, 12); -- White Shoes - Material: Canvas
   
select product_variant_attribute_values.variant_id,product_variant_attribute_values.attribute_id,product_variant_attribute_values.value_id,
product_variants.name,product_attribute_values.value from product_variant_attribute_values left join product_variants on product_variant_attribute_values.variant_id 
= product_variants.variant_id left join product_attribute_values on product_variants.variant_id = product_attribute_values.attribute_id;


CREATE TABLE user_register (
   id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
   name VARCHAR(100),
   email VARCHAR(255),
   password VARCHAR(255),
   phone VARCHAR(40)
);

insert into user_register(name,email,password,phone) values('Mehedi Hasan','mrmehedihaasan@gmail.com','ceevit250','01750834062');


======================

-- Getting Product Veriants
select * from product_variants; 

--  Getting Product Templates
select * from product_templates;

-- Getting Product Attributes
select * from product_attributes;

-- Get products by variants

    
select pt.template_id,pv.variant_id,pav.value,pav.value_id,pa.name from product_templates pt
left join product_variants pv on pv.template_id=pt.template_id
left join product_variant_attribute_values pvav on pvav.variant_id=pv.variant_id
left join product_attributes pa on pa.attribute_id=pvav.attribute_id
left join product_attribute_values pav on pav.attribute_id=pvav.attribute_id
-- join for image group_concat
where pt.template_id=1
group by pt.template_id,pv.variant_id,pav.value_id,pa.name;


==========================
select pc.image_url,pc.name,pc.id, pt.name,pt.template_id from product_category as pc
    left join product_templates pt on pt.category_id=pc.id
    group by pc.id,pt.template_id;


UPDATE product_attributes
SET name = 'brand'
WHERE attribute_id=1;

ALTER TABLE product_variants ADD price decimal(10,4);

ALTER TABLE product_variant_attribute_values ADD id int PRIMARY key;


ALTER TABLE product_variants ADD  sku varchar(30);


ALTER TABLE product_attributes
ALTER active SET DEFAULT 1;