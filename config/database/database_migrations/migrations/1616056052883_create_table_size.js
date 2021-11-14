module.exports = {

    "up": 

        `CREATE TABLE IF NOT EXISTS sizes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200)
        )
        `,

    "down": "DROP TABLE sizes"
}