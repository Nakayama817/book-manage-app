const cheerio = require('cheerio-httpcli');

// Googleで「node.js」について検索する。
let word = '9784480035646';

cheerio.fetch(`https://www.books.or.jp/book-details/${word}`, function (err, $, res, body) {
  // レスポンスヘッダを参照
    // console.log(res.headers);

    // HTMLタイトルを表示
    // console.log($('title').text());

    // リンク一覧を表示
    // $('p').each(function (idx) {
    //     console.log($(this).text());
    // });

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

    let informations = {
        name: name[5].replace(/\s+/g, ""),
        title: title[7].replace(/\s+/g, ""),
        author: author[10].replace(/\s+/g, "").replace("著：", ""),
        test: "test"
    };

    console.log(informations);
    // console.log(name);
});