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

// cors対策
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
    const messages = [];

    connection.query(
        'SELECT name FROM users',
        (err, results)=>{
            if(err){
                console.log("illeguler");
                throw err;
            }
            results.map((message) => {
                return(messages.push(message.name))
            })
            res.json(
                messages
            );
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
            res.redirect('/testenpo');
        }
    );
});


app.listen(port, ()=>{
    console.log(`listening:${port}`);
});