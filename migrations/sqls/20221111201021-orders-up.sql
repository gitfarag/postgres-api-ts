CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status varchar(100) NOT NULL,
    uid bigint REFERENCES users(id) ON DELETE CASCADE
    );
   