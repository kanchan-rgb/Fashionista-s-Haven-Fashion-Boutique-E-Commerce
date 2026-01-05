use fashionistashaven;

create table Feedbacks(
	f_id int8 NOT NULL AUTO_INCREMENT primary key,  
    u_id int4, 
    f_star int4, 
    f_description varchar(1000));


ALTER TABLE Feedbacks
MODIFY COLUMN u_id int4 NOT NULL, 
MODIFY COLUMN f_star int4 NOT NULL, 
MODIFY COLUMN f_description varchar(1000) NOT NULL;


ALTER TABLE Feedbacks AUTO_INCREMENT=1; 

insert into Feedbacks (f_description, f_star, f_name, f_user_image) values("I absolutely love the sleek design of the website! Navigating through different sections is a breeze, and the overall layout is very user-friendly.", 3, "Susmita Biswas", "https://images.meesho.com/images/products/344800333/vmnox_512.jpg");
insert into Feedbacks (f_description, f_star, f_name, f_user_image) values("Shipping is efficient, with reasonable delivery times and transparent tracking information.", 5, "Sunil Das", "https://images.meesho.com/images/products/344800333/vmnox_512.jpg");
insert into Feedbacks (f_description, f_star, f_name, f_user_image) values("I absolutely love the sleek design of the website! Navigating through different sections is a breeze, and the overall layout is very user-friendly.", 3, "Smita Biswas", "https://images.meesho.com/images/products/344800333/vmnox_512.jpg");
insert into Feedbacks (f_description, f_star, f_name, f_user_image) values("Shipping is efficient, with reasonable delivery times and transparent tracking information.", 4.3, "Atri Pal", "https://images.meesho.com/images/products/344800333/vmnox_512.jpg");
insert into Feedbacks (f_description, f_star, f_name, f_user_image) values("I absolutely love the sleek design of the website! Navigating through different sections is a breeze, and the overall layout is very user-friendly.", 3.8, "Akash", "https://images.meesho.com/images/products/344800333/vmnox_512.jpg");
insert into Feedbacks (f_description, f_star, f_name, f_user_image) values("Shipping is efficient, with reasonable delivery times and transparent tracking information.", 4.2, "Kanchan", "https://images.meesho.com/images/products/344800333/vmnox_512.jpg");

desc Feedbacks;

select * from Feedbacks;

drop table Feedbacks;