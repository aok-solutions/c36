drop database if exists beanbean;
create database beanbean;

\c beanbean;

create table users (
	id serial primary key,
	username text,
	over_eighteen boolean,
	highscore int
);

insert into users(username, over_eighteen, highscore) values ('sample_user', true, 2000);