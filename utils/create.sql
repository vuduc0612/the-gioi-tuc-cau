CREATE TABLE [admin] (
    admin_id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50),
    password NVARCHAR(50)
);

CREATE TABLE [user] (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    username NVARCHAR(50),
    password NVARCHAR(50),
    first_name NVARCHAR(50),
    last_name NVARCHAR(50),
    email NVARCHAR(100),
    phone NVARCHAR(20),
    address NVARCHAR(255),
    current_cart INT
);

CREATE TABLE [category] (
    category_id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100),
    description NTEXT
);

CREATE TABLE [product] (
    product_id INT IDENTITY(1,1) PRIMARY KEY,
    name NVARCHAR(100),
    description NTEXT,
    price DECIMAL(10, 2),
    color NVARCHAR(50),
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(category_id)
);

create table [productImage] (
	img_id INT IDENTITY(1,1) PRIMARY KEY,
	product_id INT,
	url nvarchar(255),
	FOREIGN KEY (product_id) REFERENCES product(product_id) 
);

CREATE TABLE [inventory] (
    sku INT IDENTITY(1,1) PRIMARY KEY,
    product_id INT,
    size INT,
    quantity INT,
    FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE [cart] (
    cart_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    total_price DECIMAL(10, 2),
    cart_status BIT,		
    FOREIGN KEY (user_id) REFERENCES [user](user_id)
);

CREATE TABLE [item] (
    item_id INT IDENTITY(1,1) PRIMARY KEY,
    cart_id INT,
    sku INT,
    quantity INT,
    FOREIGN KEY (cart_id) REFERENCES cart(cart_id),
    FOREIGN KEY (sku) REFERENCES inventory(sku)
);

CREATE TABLE [order] (
    order_id INT IDENTITY(1,1) PRIMARY KEY,
    cart_id INT,
    order_date DATE,
    address NVARCHAR(255),
    FOREIGN KEY (cart_id) REFERENCES cart(cart_id)
);
