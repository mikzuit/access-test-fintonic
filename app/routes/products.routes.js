/**
 * @file Product Route
 * @author Miguel Ruiz
 */
module.exports = (app) => {
    const products = require("../controllers/products.controller.js");

    //New Product
    app.post("/products", products.create);

    //List Products
    app.get("/products", products.findAll);

    //Delete Product
    app.delete("/products/:productId", products.delete);

    // TODO : getById and Put routes
}