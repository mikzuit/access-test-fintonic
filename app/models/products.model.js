/**
 * @file Product Model
 * @author Miguel Ruiz
 */

const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name: String,
    description: String
}, {
    timestamp: true
});

module.exports = mongoose.model('Product', ProductSchema);