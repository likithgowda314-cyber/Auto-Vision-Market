CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    city VARCHAR(100) DEFAULT 'Bengaluru',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE parts (
    id SERIAL PRIMARY KEY,
    part_name VARCHAR(255) NOT NULL,
    category VARCHAR(100) NOT NULL,
    vehicle_make VARCHAR(100),
    vehicle_model VARCHAR(100),
    vehicle_year INTEGER,
    oem_price DECIMAL(10, 2) NOT NULL,
    market_price DECIMAL(10, 2) NOT NULL,
    availability VARCHAR(50) DEFAULT 'In Stock',
    monthly_demand INTEGER DEFAULT 0,
    popularity INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending',
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    part_id INTEGER REFERENCES parts(id),
    quantity INTEGER NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);
