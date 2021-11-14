module.exports = {

    "up": 
    
        `CREATE TABLE IF NOT EXISTS provinces (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50)
        )
        `,

    "down": "DROP TABLE provinces"
}