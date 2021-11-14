module.exports = {

    "up": 
    
    `CREATE TABLE IF NOT EXISTS order_item(
        id INT AUTO_INCREMENT PRIMARY KEY,
        orderId INT,
        productId INT,
        price FLOAT,
        quantity INT,
        total FLOAT,
        FOREIGN KEY (orderId)
            REFERENCES orders(id),
        FOREIGN KEY (productId)
            REFERENCES products(id)
    )
    `
    ,
    "down": "DROP TABLE orders"
}