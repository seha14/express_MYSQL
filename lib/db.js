const mysql = require('mysql');

const conection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'express_db'
});

conection.connect(function(error){
    if(!!error){
        console.log(error);
    }
    else{
        console.log('Connected :');
    }
})
