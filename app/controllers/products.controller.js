/**
 * @file Product Controller
 * @author Miguel Ruiz
 */
const Product = require("../models/products.model.js");

// Save a new Product
exports.create = (req, res) => {
    // Validate request contains Product description
    if(!req.body.description) {
        return res.status(400).send({
            message: "Product description cannot be empty"
        });
    }

    // Create a Product
    const Prod = new Product({
        name: req.body.name || "Unnamed Product", 
        description: req.body.description
    });

    // Save Product in the db
    Prod.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred creating a Product."
        });
    });
};

// List all Products
exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Products."
        });
    });
};

 // TODO : getById Products and Put Products

// Delete Product
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Product id " + req.params.productId
        });
    });
};