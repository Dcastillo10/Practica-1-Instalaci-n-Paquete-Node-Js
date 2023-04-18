const express = require('express');
const mongoose=require('mongoose');
require ("dotenv").config();


const app = express();
const port = process.env.PORT || 3000;

//middle 


//routes
app.get('/', (req,res) => {
    res.send('welcome to my API');
})


//mongodb connection 
mongoose.connect(
    process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB ATLAS")).catch((error) => console.log(error));

app.listen(port, () => console.log('Server listening on port',port));