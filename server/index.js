const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const clientRoutes = require("./routes/client");
const generalRoutes = require("./routes/general");
const managementRoutes = require("./routes/management.js");
const salesRoutes = require("./routes/sales");

require("dotenv").config();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
var MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 9000 ;
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('Connected to mongodb')
        app.listen(PORT, () => {
            console.log(`Node Api running on port ${PORT}`)
        })
    }).catch((error) => {
        console.log(error);

    })

// var PORT = process.env.PORT