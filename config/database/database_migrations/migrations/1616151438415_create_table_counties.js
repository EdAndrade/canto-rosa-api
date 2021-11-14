module.exports = {
    "up": 
    
        `CREATE TABLE IF NOT EXISTS counties (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            provinceId INT,
            FOREIGN KEY (provinceId)
                REFERENCES provinces (id)
        )
        `,

    "down": "DROP TABLE counties"
}