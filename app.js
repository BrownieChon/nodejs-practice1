// main app

// Import module
const express = require('express');
const chalk = require('chalk');
// change color module
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = process.env.port;
// call modules
const path = require('path')
// call path
const products = require('./data/products.json')
// call data
const productsRouter = express.Router();
// call router = int_id(django)
// end import

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public2/")))
// set static path for static web


app.set("views", "./src/views");
// set views path
app.set("view engine", "ejs");
// set view engine



// Set urls pattern    

app.get("/", (req, res) => {
    // set url path

    res.render('index', { username: 'Chonpat', custommer: ["a", "b", "c", "d"] });
    // {} type = data = context(django)
    // send respond when static fail
})

productsRouter.route("/").get((req, res) => {
    res.render("products",products,);
        // render("products.ejs",data/product.json)
});

app.use("/products", productsRouter);
    // Set url route /product


// End urls pattern






app.listen(port, () => {

    debug("On port" + chalk.red(port))
    // node app.js <= run app
    // localhost:port <= app url
})
