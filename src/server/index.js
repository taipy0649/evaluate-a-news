const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`You are on the port : ${port}`);
});
