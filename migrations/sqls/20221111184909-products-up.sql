create table products (
    id serial primary key,
    name varchar(80) not null,
    cat varchar(80) not null,
    price integer not null,
    qty integer not null
);