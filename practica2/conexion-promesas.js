const mysql = require('mysql2/promise');

async function main() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'clientes'
    });
    
    console.log('Connected to MySQL Database!');
    
    const [rows, fields] = await connection.execute('SELECT * FROM usuarios');
    console.log('Query Result:', rows);
    

    await connection.end();
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
