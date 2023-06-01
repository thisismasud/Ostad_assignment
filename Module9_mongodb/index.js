const path = require("path");
const express = require('express');
const helmet = require("helmet");
const morgan = require('morgan');
const app = express();
const cors = require('cors');
require("dotenv").config();

const mongoose = require('mongoose');
const router = require('./routes/books');




// creating middleware 
app.use(cors()); 
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(helmet());


// routes and middlewares
app.use("/api/v1/", router);


//Server
const port = process.env.PORT || 8000;


// connects to the MongoDB and starts server 
mongoose
    .connect(process.env.DATABASE)
    .then(()=>{
        app.listen(port, () =>{
            console.log(`Server is listening on ${port}`);
        })
    })
    .catch((err) => console.log(err));