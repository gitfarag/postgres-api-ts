CREATE TABLE order_product (
    id SERIAL PRIMARY KEY,
    qty INT NOT NULL,
    uid bigint REFERENCES users(id) ON DELETE CASCADE,
    pid bigint REFERENCES products(id) ON DELETE CASCADE
);