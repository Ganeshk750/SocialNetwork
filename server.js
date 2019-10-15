const express = require('express');
const connectDB = require('./config/db');
const app = express();

//DATABASE CONNECT
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res) =>{
    res.send('API is working');
});


app.listen(PORT, () => console.log(`Server is Running on ${PORT}`));