const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'clientes',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.time("conexion pooling");

pool.query('SELECT * FROM usuarios', (err, results, fields) => {
  if (err) {
    console.error(err);
  } else {
    console.log(results);
  }
  console.timeEnd("conexion pooling");
  
  // Cierra el pool correctamente
  pool.end((err) => {
    if (err) console.error("Error cerrando el pool:", err);
  });
});
