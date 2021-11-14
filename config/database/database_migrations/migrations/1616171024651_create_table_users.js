module.exports = {

    "up": 

        `CREATE TABLE IF NOT EXISTS users(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200),
            birthdate VARCHAR(100),
            email VARCHAR(100),
            phoneNumber VARCHAR(10),
            password VARCHAR(255),
            imageId INT,
            countyId INT,

            FOREIGN KEY (countyId)
                REFERENCES counties (id),
            FOREIGN KEY (imageId)
                REFERENCES images (id)
        )`,

    "down": "DROP TABLE users"
}