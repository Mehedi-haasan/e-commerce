


CREATE TABLE  product_template(
     id INT PRIMARY KEY serial NOT NULL,
     title text,
     price decimal(10, 4),
     image_url text,
     stock int,
     discount int,
     rating int,
     category varchar(225)
);


CREATE TABLE  details(
     id INT PRIMARY KEY serial NOT NULL,
     image text, --from all image table
     stock int, --from
     discount int,
     category varchar(225),
);
