const express = require('express');
const productsRouter = express.Router();
// call router = int_id(django)
const products = require('./../data/products.json')
// call data
// end import


productsRouter.route("/").get((req, res) => {
    res.render("products", {products},);
    // render("products.ejs",data/product.json)
});

productsRouter.route("/:product_id").get((req, res) => {
    const id = req.params.product_id;
    res.render("product", { product: products[id] });
    // render("products.ejs",data/product.json)
});

module.exports = productsRouter;