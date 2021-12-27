const express = require('express');
const app = express();
const port = 8081;
const dotenv = require('dotenv');
dotenv.config();

var textapi = new api({
    api_key: process.env.API_KEY
})

app.listen(port, () => {
    console.log(`You are on the port : ${port}`);
});

app.use(express.static('dist'));
