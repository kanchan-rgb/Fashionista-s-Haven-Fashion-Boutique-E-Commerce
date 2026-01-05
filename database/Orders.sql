use fashionistashaven;

create table Orders(
	o_id int8 NOT NULL AUTO_INCREMENT primary key,
    u_id long,
    user_email varchar(400),
    p_id long,
    product_image longblob,
    product_size varchar(6),
    product_amount long,
    product_imagelink varchar(1000),
    product_name varchar(120),
    product_price long,
    product_category varchar(70),
    recipient_name varchar(120),
    recipient_phnumber long,
    recipient_alternativephnumber long,
    recipient_zipcode int8,
    recipient_state varchar(190),
    recipient_city  varchar(220),
    recipient_houseno varchar(50),
    recipient_road_colony varchar(200),
    recipient_landmark varchar(300),
    order_time  varchar(50),
    order_date  varchar(50)
    );

ALTER TABLE Orders AUTO_INCREMENT=10001;

insert into Orders (p_id, u_id, product_size) values(100,102,"s");

desc Orders;

select * from Orders;

drop table Orders;