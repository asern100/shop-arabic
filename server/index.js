const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require("mongoose");

const shopRoutes = require("./routes/shops")
const sellpointsRoutes = require("./routes/sellpoints")
const saleRoutes = require("./routes/sales")
const clientRoutes = require("./routes/clients")
const providerRoutes = require("./routes/providers")
const transfertRoutes = require("./routes/transferts")
const employeeRoutes = require("./routes/employees")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());



//Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/shop', { useUnifiedTopology: true, useNewUrlParser:true }, () => {
  console.log("connected to db SUCCESS !");
});



//Middleware
app.use('/api/',shopRoutes)
app.use('/api/',sellpointsRoutes)
app.use('/api/',saleRoutes)
app.use('/api/',clientRoutes)
app.use('/api/',providerRoutes)
app.use('/api/',transfertRoutes)
app.use('/api/',employeeRoutes)

app.listen(3000, () => console.log("Server Up & Running "));

