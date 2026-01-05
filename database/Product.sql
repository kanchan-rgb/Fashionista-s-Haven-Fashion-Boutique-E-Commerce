create database fashionistashaven;

use fashionistashaven;

create table Product(
	p_id int8 NOT NULL AUTO_INCREMENT primary key, 
	p_name varchar(500), 
    p_brand varchar(500), 
    p_price int8, 
    p_description varchar(1000), 
    p_category varchar(100), 
    p_stock int4, 
    p_reviews int4, 
    p_stars float8, 
    p_imagelink varchar(1000),
    p_image longblob, 
    p_featured boolean
);


ALTER TABLE Product
MODIFY COLUMN p_name varchar(500) NOT NULL,
MODIFY COLUMN p_brand varchar(500) NOT NULL,
MODIFY COLUMN p_price int8 NOT NULL,
MODIFY COLUMN p_description varchar(1000) NOT NULL,
MODIFY COLUMN p_category varchar(100) NOT NULL,
MODIFY COLUMN p_stock int4 NOT NULL,
MODIFY COLUMN p_reviews int4 NOT NULL,
MODIFY COLUMN p_stars float8 NOT NULL,
MODIFY COLUMN p_imagelink varchar(1000) NOT NULL,
MODIFY COLUMN p_image longblob NOT NULL;




ALTER TABLE Product AUTO_INCREMENT=100;

insert into Product (p_name, p_brand, p_price, p_description, p_category, p_stock, p_reviews, p_stars, p_image, p_featured) values("KALINI (Women Ethnic Motifs Printed Mirror Work Summer Sheers Anarkali Kurta)", "Fashionista's Haven", 63900, "PRODUCT DETAILS : Ethnic motifs printed, Round neck : Short, regular sleeves, Anarkali shape with pleated style, Mirror work detail, Calf length with flared hem, Machine weave regular viscose rayon, Material & Care : Viscose Rayon, Sleeve Length : Short Sleeves, Shape : Anarkali, Neck : Round Neck, Print or Pattern Type : Ethnic Motifs, Design Styling : Pleated, Ornamentation : Mirror Work, Length : Calf Length", "women's wear", 10, 2000, 4.5, "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21589912/2023/1/18/895674c1-2d15-408e-943f-a42d1733d3511674014421934KALINIWomenPurpleGeometricPrintedFlaredSleevesMirrorWorkSumm1.jpg", true);
insert into Product (p_name, p_brand, p_price, p_description, p_category, p_stock, p_reviews, p_stars, p_image, p_featured) values("Soft Cotton Kurta Pajama In Green Colour", "Fashionista's Haven", 212900, "This Kurta Pajama Is Perfect One Crafted With Work. The Cream Colour Kurta Is Fabricated In Silk Fabric. It Has Comes In Various Sizes S, M, L, XL, XXL, XXXL . So You Can Wear This And Make Your Celebration Unique With This Indo Western Sherwani.", "men's wear", 20, 34000, 4.1, "https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/2022/June-2022/Soft-Cotton-Kurta-Pajama-In-Green-Colour-KP5600052-A.jpg", true);
insert into Product (p_name, p_brand, p_price, p_description, p_category, p_stock, p_reviews, p_stars, p_image, p_featured) values("Modern Girls Kurti & Palazo", "Fashionista's Haven", 29000, "Top Fabric : Cotton Blend, Dupatta : Without Dupatta, Top Shape : A-line, Bottom Type : Sharara, Top Length : knee length, Top Pattern : Printed, Sleeve Length : Three-Quarter Sleeves, Sizes :  5-6 Years.", "kid's wear", 15, 300, 3.8, "https://images.meesho.com/images/products/344800333/vmnox_512.jpg", true);
insert into Product (p_name, p_brand, p_price, p_description, p_category, p_stock, p_reviews, p_stars, p_image, p_featured) values("Southwest Boutique Wool Tote Purse Bag Native American Western Style Handwoven", "Fashionista's Haven", 19000, "Material Type : Wool, Lining : Cotton, Closure Type : Zipper, Stunning Zapotec Style bag with hand-woven wool panels. Durable Grade 'A' soft faux leather straps have a drop of 12inch. Deep, rich southwestern style patterns and colors. Bag measures 16inch by 18inch. Great for use as a diaper bag, purse, or daily use. Zipper closure with interior pocket. Fully lined interior. Item Weight : 907 g, Item Dimensions L x W x H : 40.6 x 10.2 x 45.7 Centimeters", "accessories", 15, 300, 3.8, "https://m.media-amazon.com/images/I/81bB6uy48CL.AC_UY1000.jpg", true);

desc Product;

select * from Product;

drop table Product;