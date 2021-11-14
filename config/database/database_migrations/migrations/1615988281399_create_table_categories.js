module.exports = {

    "up": 

        `CREATE TABLE IF NOT EXISTS categories (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50),
            imageId INT,
            CONSTRAINT fk_image
            FOREIGN KEY (imageId)
                REFERENCES images (id)
        )
        `,

    "down": "DROP TABLE categories"
}