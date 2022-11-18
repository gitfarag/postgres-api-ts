create table users (
    id serial primary key,
    name varchar(80) not null,
    username varchar(80) not null,
    password varchar(80) not null,
    token varchar(80)
);