require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/mongo.js');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.use("/api", require("./routes"));

app.listen(port, ()=>{
    console.log(`La app esta corriendo en el puerto ${port}`);
})

dbConnect();