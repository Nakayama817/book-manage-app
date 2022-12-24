const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test01',
    password: 'password',
    database: 'test'
});

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTION"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!!');
});

app.get("/testenpo", (req, res) => {

    connection.query(
        'SELECT * FROM users',
        (err, results)=>{
            res.send(results)
        }
    );

    
    
});

app.post('/testenpo', (req, res) => {
    // try{
    //     return res.json(req.body);
    // }catch(error){
    //     return console.error(error);
    // }
    
    connection.query(
        'INSERT INTO users (name) VALUES (?)',
        [req.body.name],
        (error, results) => {
        }
    );
    res.redirect('/testenpo');
});


app.delete('/testenpodel/:id', (req, res) => {
    const { id } = req.params;
    connection.query(
        'DELETE FROM users WHERE id = ?',
        id,
        (error, results) => {
        }
    );
    res.redirect('/testenpo');
});


app.listen(port, ()=>{
    console.log(`listening:${port}`);
});