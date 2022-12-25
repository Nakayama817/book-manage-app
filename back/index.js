const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mysql = require('mysql');
const cheerio = require('cheerio-httpcli');
// const session = require('express-session');

const cmsql = mysql.createConnection({
    host: 'localhost',
    user: 'manager02',
    password: 'password',
    database: 'bookmanage'
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'test01',
    password: 'password',
    database: 'test'
});


// app.use(
//     session({
//         secret: 'my_secret_key',
//         resave: false,
//         saveUninitialized: false,
//     })
// )


app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World!!');
});





app.get('/testenpo', (req, res) => {

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







app.get('/ep', (req, res) => {

    cmsql.query(
        'SELECT * FROM users',
        (err, results)=>{
            res.send(results);
        }
    );

    
    
});

let currentuser = "default";

app.get('/ep/currentuser', (req, res) => {

    // if(req.session.userId === undefined){
    //     console.log('ログインしていません');
    // }else{
    //     const currentuser = ()=>{
    //         cmsql.query(
    //             'SELECT * FROM users WHERE id = ?',
    //             [req.session.userId],
    //             (error, results)=>{
    //                 return(results[0]);
    //             }
    // //         )
    // //     }
    //     res.send(currentuser);
        
    // }

    res.send(currentuser);

        
    
});

app.post('/ep/currentuser', (req, res) => {
    // const id = req.body;
    // cmsql.query(
    //     'SELECT * FROM users WHERE id = ?',
    //     id,
    //     (error, results) => {
    //         if (results[0] !== null) {
    //             req.session.userId = results[0].id;
    //         }
    //     }
    // )
    currentuser = req.body;

    
});

app.post('/ep', (req, res) => {
    const {name} = req.body;

    cmsql.query(
        'INSERT INTO users (name) VALUES (?)',
        [name],
        (error, results) => {
            if(error) console.log(error);
        }
    );
});

app.post('/ep/serch', (req,res) => {
    const {isbn} = req.body;
        let informations = {
            publisher: "",
            title: "",
            author: "",
            isbn: ""
        };
    cheerio.fetch(`https://www.books.or.jp/book-details/${isbn}`, function (err, $, res, body) {
        
        
    
    
        // レスポンスヘッダを参照
        // console.log(res.headers);

        // HTMLタイトルを表示
        // console.log($('title').text());

        // リンク一覧を表示
            
        let name = [];
        let title = [];
        let author = [];

        

        $('p').each(function (idx) {
            name[idx] = $(this).text();
        });

        $('p').each(function (idx) {
            title[idx] = $(this).text();
        });

        $('p').each(function (idx) {
            author[idx] = $(this).text();
        });

        informations = {
            publisher: name[5].replace(/\s+/g, ""),
            title: title[7].replace(/\s+/g, ""),
            author: author[10].replace(/\s+/g, "").replace("著：", ""),
            isbn: Number(isbn)
        };


        cmsql.query(
            'INSERT into books (title, author, publisher, isbn) VALUES (?, ?, ?, ?)',
            [informations.title, informations.author, informations.publisher, isbn],
            (error, results) => {
                if(error){
                    console.log(error);
                }
            }
        );
        // console.log(informations);

        // console.log(informations);
        // console.log(name);
    });

    
})


app.delete('/ep/del/:id', (req, res) => {
    const { id } = req.params;
    cmsql.query(
        'DELETE FROM users WHERE id = ?',
        id,
        (error, results) => {
        }
    );
});




app.listen(port, ()=>{
    console.log(`listening:${port}`);
});