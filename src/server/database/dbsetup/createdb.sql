CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    email_address VARCHAR(80) NOT NULL UNIQUE
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE,
    order_cost VARCHAR(6),
    order_status VARCHAR(20),
    customer_id INT REFERENCES customer(customer_id) NOT NULL
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_description VARCHAR(70) NOT NULL,
    product_price DECIMAL NOT NULL,
    product_image_link VARCHAR(50),
    product_colour VARCHAR(20),
    product_category VARCHAR(50),
    product_theme VARCHAR(30),
    stock_count INT
);

CREATE TABLE order_details (
    order_details_id SERIAL PRIMARY KEY,
    quantity NUMERIC NOT NULL,
    order_id INT REFERENCES orders(order_id) NOT NULL,
    product_id INT REFERENCES products(product_id) NOT NULL
);
