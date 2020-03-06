const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const fs = require('fs')

let app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/contact-form', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send("thnks");
})

//Super special middleware logger
// app.use((req, res, next) => {
//     fs.appendFileSync('log.txt', `${req.url}\n`)
//     next();
// });

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);