const express = require('express')
const mysql = require('mysql')

const app = express()

// 创建连接
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  // database : 'my_db'
});

// Connect
db.connect((err)=>{
  if(err) throw err;
  console.log('MySql connected ...')
})

// 创建数据库
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});

app.listen('3000',()=>{
  console.log('Server started on port 3000')
})