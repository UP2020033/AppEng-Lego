CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    email_address VARCHAR(80) NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    delivery_address_line_1 VARCHAR(50) NOT NULL,
    delivery_address_line_2 VARCHAR(50) NOT NULL,
    delivery_city VARCHAR(50) NOT NULL,
    delivery_county VARCHAR(25),
    delivery_postcode VARCHAR(7),
    order_date DATE,
    order_cost VARCHAR(6),
    customer_id INT REFERENCES customer(customer_id) NOT NULL
);

CREATE TABLE order_details (
    order_details_id SERIAL PRIMARY KEY,
    quantity NUMERIC NOT NULL,
    order_id INT REFERENCES orders(order_id) NOT NULL,
    product_id INT REFERENCES products(product_id) NOT NULL
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_description VARCHAR(70) NOT NULL,
    product_price DECIMAL NOT NULL,
    product_image VARCHAR(50),
    product_colour VARCHAR(20),
    product_category VARCHAR(50),
    product_theme VARCHAR(30)
    stock_count INT
);