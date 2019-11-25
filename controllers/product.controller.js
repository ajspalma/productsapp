const Product = require('../models/product.model');

// Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test Controller!');
};

exports.product_create = function (req, res, next) {
    console.log(req.body);
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};