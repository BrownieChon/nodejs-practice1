// main app

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


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")))
// set static path

app.get("/", (req,res) => {
// set url path

    res.send('<h1>Say Hi</h1> <br> <h2>Hello</h2>');
    // send respond
})

app.listen(port,()=>{

    debug("On port" + chalk.red(port))
    // node app.js <= run app
    // localhost:port <= app url
})
