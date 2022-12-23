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


app.listen(port, ()=>{
    console.log(`listening:${port}`);
});