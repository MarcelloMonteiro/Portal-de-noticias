var mysql = require('mysql');


var db = function(){
    console.log('A conexao foi estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias' 
    });
}
module.exports = function(){
    console.log('Conectou ao banco')
    return db
}
