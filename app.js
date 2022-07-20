// main app

const express = require('express');
const chalk = require('chalk');
// change color module
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;
// call modules

app.use(morgan('combined'));

app.get("/", (req,res) => {
// get request from app.domain/ 

    res.send('<h1>Say Hi</h1> <br> <h2>Hello</h2>');
    // send respond
})

app.listen(port,()=>{

    debug("On port" + chalk.red(port))
    // node app.js <= run app
    // localhost:port <= app url
})
