
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

const cors = require('cors');
app.use(cors());

// Static Middleware

app.get('/', function (req, res, next) {
    connection.connect((error) => {
        if (error) throw error;
        console.log('Connected to MySQL database!');
    });

    let results_global;
    connection.query('SELECT * from cars', (error, results) =>{
        if (error) throw error;
        // console.log(results);
        results_global = results;

        console.log(results_global);
        res.json(results_global);
    });


})

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'auta_baza'
});



app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});