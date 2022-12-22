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

app.get("/enpo", (req, res) => {
    connection.query(
        'SELECT * FROM users',
        (err, results)=>{
            if(err){
                console.log("illeguler");
                throw err;
            }
            res.json({message: results[0].name});
        }
    )

    
    
});


app.listen(port, ()=>{
    console.log(`listening:${port}`);
});