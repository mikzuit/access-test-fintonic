/**
 * @file Product Route
 * @author Miguel Ruiz
 */
module.exports = (app) => {
    const products = require("../controllers/products.controller.js");

    // TODO : jwt implementation
    // Check for authentication
    const auth = (req, res, next) => {
        if(req.headers.token === "fintonic") {
            return next();
        } else {
            res.status(403);
            return next(new Error("Not authorized"));
        }
    }

    //New Product, needs authentication
    app.post("/products", auth, products.create);

    //List Products
    app.get("/products", products.findAll);

    //Delete Product,needs authentication
    app.delete("/products/:productId", auth, products.delete);

    // TODO : getById and Put routes
}