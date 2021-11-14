module.exports = {
    "up": 
    
        `CREATE TABLE IF NOT EXISTS admins (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100),
            phoneNumber VARCHAR(9),
            password VARCHAR(200),
            level VARCHAR(50)
        )`,

    "down": "DROP TABLE admins"
}