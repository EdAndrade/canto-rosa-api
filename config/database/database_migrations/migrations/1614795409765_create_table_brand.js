module.exports = {
    "up": 
    
        `CREATE TABLE IF NOT EXISTS brands (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50)
        )
        `,

    "down": "DROP TABLE brands"
}