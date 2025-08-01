// controllers/productController.js
// Controller for handling product-related logic

const fs = require('fs');
const path = require('path');

// Read products from products.json
function getProducts(req, res) {
    const productsPath = path.join(__dirname, '../products.json');
    fs.readFile(productsPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to read products file.' });
        }
        try {
            const products = JSON.parse(data);
            res.json(products);
        } catch (parseErr) {
            res.status(500).json({ error: 'Error parsing products data.' });
        }
    });
}

module.exports = {
    getProducts
};
