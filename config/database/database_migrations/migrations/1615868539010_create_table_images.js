module.exports = {

    "up": 

        `CREATE TABLE IF NOT EXISTS images (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200)
        )
        `,

    "down": "DROP TABLE images"
}