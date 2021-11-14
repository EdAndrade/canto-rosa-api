module.exports = {

    "up": 
        
        `CREATE TABLE IF NOT EXISTS products(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200),
            quantity INT,
            price FLOAT,
            inPromo TINYINT(1) DEFAULT 0,
            inPromoPrice FLOAT DEFAULT 0,
            colorId INT,
            brandId INT,
            categoryId INT,
            imageId INT,
            sizeId INT,
            FOREIGN KEY (colorId)
                REFERENCES colors (id),
            FOREIGN KEY (brandId)
                REFERENCES brands (id),
            FOREIGN KEY (categoryId)
                REFERENCES categories (id),
            FOREIGN KEY (imageId)
                REFERENCES images (id),
            FOREIGN KEY (sizeId)
                REFERENCES sizes (id)

        )`,

    "down": "DROP TABLE products"
}