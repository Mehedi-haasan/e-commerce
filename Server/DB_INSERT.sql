insert into res_user(name,login,password,mobile)
values ('Mehedi Hasan','mrmehedihaasan@gmail.com','napa500#','123456789');


insert into res_partner(name,email,mobile,contact_type,user_id) values
('Mehedi hasan','mrmehedihaasan@gmail.com','123456789',1);


Smartphones
Mazharul
Laptops
Mazharul
Home & Furniture
Mazharul
Beauty & Personal Care
Mazharul
E-books
Mazharul
Fitness & Exercise
Mazharul
Mazharul Sabbir
Food & Groceries

insert into product_category(name,image_url)values
("Men's Fashion",'https://img.freepik.com/free-photo/blank-white-tshirt-wooden-background_1409-4089.jpg'),
("Women's Fashion",'https://img.freepik.com/premium-photo/caucasian-teenage-girl-yellow-background-stylish-young-woman-with-shopping-bags-hands_763111-1247.jpg'),
("Smartphones",'https://img.freepik.com/premium-photo/vector-realistic-smartphone-3d-view_985323-4802.jpg'),
("Home & Furniture",'https://img.freepik.com/premium-photo/duplex-house-design_933329-239.jpg'),
("E-books",'https://img.freepik.com/free-photo/stack-books-with-word-front_1340-27740.jpg'),
("Fitness & Exercise",'https://img.freepik.com/premium-photo/fit-young-man-exercising-indoors-building-strength-confidence_942243-1320.jpg'),
("Food & Groceries",'https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741745.jpg'),
("Beauty & Personal Care",'https://img.freepik.com/free-photo/young-woman-applying-facial-mask-pampering-generated-by-ai_24640-90024.jpg');


insert into product_template(name,image_url,price,standard_price,sku,description,category_id)
values("Men's Fashion - test_1",'https://img.freepik.com/free-photo/blank-white-tshirt-wooden-background_1409-4089.jpg',550,300,'MF001',"Men's Fashion - test_1 Desc",1),
("Men's Fashion - test_2",'https://img.freepik.com/free-photo/blank-white-tshirt-wooden-background_1409-4089.jpg',650,400,'MF002',"Men's Fashion - test_2 Desc",1),

("Women's Fashion - test_1",'https://img.freepik.com/premium-photo/caucasian-teenage-girl-yellow-background-stylish-young-woman-with-shopping-bags-hands_763111-1247.jpg',450,400,'Wf001',"Women's Fashion - test_1 Desc",2),
("Women's Fashion - test_2",'https://img.freepik.com/premium-photo/caucasian-teenage-girl-yellow-background-stylish-young-woman-with-shopping-bags-hands_763111-1247.jpg',400,400,'WF002',"Women's Fashion - test_2 Desc",2),

("Smartphones - test_1",'https://img.freepik.com/premium-photo/vector-realistic-smartphone-3d-view_985323-4802.jpg',20000,18000,'SM001',"Women's Fashion - test_1 Desc",3),
("Smartphones - test_2",'https://img.freepik.com/premium-photo/vector-realistic-smartphone-3d-view_985323-4802.jpg',25000,23000,'Sm002',"Women's Fashion - test_2 Desc",3),

("Home & Furniture - test_1",'https://img.freepik.com/premium-photo/duplex-house-design_933329-239.jpg',450,400,'Wf001',"Women's Fashion - test_1 Desc",4),
("Home & Furniture - test_2",'https://img.freepik.com/premium-photo/duplex-house-design_933329-239.jpg',400,400,'WF002',"Women's Fashion - test_2 Desc",4),

("E-books - test_1",'https://img.freepik.com/free-photo/stack-books-with-word-front_1340-27740.jpg',450,400,'Wf001',"Women's Fashion - test_1 Desc",5),
("E-books - test_2",'https://img.freepik.com/free-photo/stack-books-with-word-front_1340-27740.jpg',400,400,'WF002',"Women's Fashion - test_2 Desc",5),

("Fitness & Exercise - test_1",'https://img.freepik.com/premium-photo/fit-young-man-exercising-indoors-building-strength-confidence_942243-1320.jpg',450,400,'Wf001',"Women's Fashion - test_1 Desc",6),
("Fitness & Exercise - test_2",'https://img.freepik.com/premium-photo/fit-young-man-exercising-indoors-building-strength-confidence_942243-1320.jpg',400,400,'WF002',"Women's Fashion - test_2 Desc",6),

("Food & Groceries - test_1",'https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741745.jpg',450,400,'Wf001',"Women's Fashion - test_1 Desc",7),
("Food & Groceries - test_2",'https://img.freepik.com/free-photo/close-up-delicious-chicken-meal_23-2150741745.jpg',400,400,'WF002',"Women's Fashion - test_2 Desc",7),


("Beauty & Personal Care - test_1",'https://img.freepik.com/free-photo/young-woman-applying-facial-mask-pampering-generated-by-ai_24640-90024.jpg',450,400,'Wf001',"Women's Fashion - test_1 Desc",8),
("Beauty & Personal Care - test_2",'https://img.freepik.com/free-photo/young-woman-applying-facial-mask-pampering-generated-by-ai_24640-90024.jpg',400,400,'WF002',"Women's Fashion - test_2 Desc",8);


insert into product_attribute(tmpl_id,name,display_name,display_type) values
(1, "color","Color","radio"),(1,"size","Size","radio_pill");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(2, "color","Color","radio"),(2,"size","Size","radio_pill");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(4, "color","Color","radio"),(4,"size","Size","radio_pill");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(5, "color","Color","radio"),(5,"brand","Brand","selection");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(6, "color","Color","radio"),(6,"brand","Brand","selection");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(7, "color","Color","radio"),(7,"matarial","Matarial","selection");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(8, "color","Color","radio"),(8,"matarial","Matarial","selection");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(9, "agegroup","Age Group","radio"),(9,"paper_type","Paper type","radio_pill");

insert into product_attribute(tmpl_id,name,display_name,display_type) values
(10, "agegroup","Age Group","radio"),(10,"paper_type","Paper type","radio_pill");


insert into product_attribute(tmpl_id,name,display_name,display_type) values
(9, "agegroup","Age Group","radio"),(9,"paper_type","Paper type","radio_pill");


insert into product_attribute(tmpl_id,name,display_name,display_type) values
(10, "agegroup","Age Group","radio"),(10,"paper_type","Paper type","radio_pill");

insert into product_attribute_value(value,attribute_id)values
("Red",1),("Black",1),("White",1),
("S",2),("M",2),("L",2),("XL",2),

("Gray",3),("Black",3),("White",3),
("S",4),("M",4),("L",4),

("Blue",5),("Black",5),("White",5),
("S",6),("M",6),("XL",6),

("Yellow",7),("Black",7),("White",7),
("S",8),("M",8),("XXL",8),

("Yellow",9),("Black",9),("White",9),
("Walton",10),("Samsung",10),("AppLe",10),("Mi",10),

("Yellow",11),("Black",11),("White",11),
("Walton",12),("Samsung",12),("AppLe",12),

("Yellow",13),("Black",13),("White",13),
("Wood",14),("Alumineum",14),("Steel",14),

("Yellow",15),("Black",15),("White",15),
("Alumineum",16),("Steel",16),("Wood",16),

("Kidz",17),("Adultk",17),
("Paper",18),("Paper",18),("Paper",18);







