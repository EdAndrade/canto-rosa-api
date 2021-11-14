module.exports = {

    "up": 
    
    `CREATE TABLE IF NOT EXISTS orders(
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId INT,
        date VARCHAR(20),
        hour VARCHAR(20),
        total FLOAT,

        FOREIGN KEY (userId)
            REFERENCES users(id)
    )
    `
    ,
    "down": "DROP TABLE orders"
}