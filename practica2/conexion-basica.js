const mysql = require('mysql2');
const connection = mysql.createConnection({

  host: 'localhost',
  user: 'root',
  database: 'clientes'
});
console.time("conexion basica");
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
  
  connection.query('SELECT * FROM usuarios', (err, results, fields) => {
    if (err) throw err;
    console.log(results);
    console.timeEnd("conexion basica");
  });

  connection.end();
});
