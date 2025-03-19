const { exec } = require('child_process');
const fs = require('fs');

console.log("Ejecutando pruebas de conexión...");

const ejecutarPrueba = (archivo) => {
    return new Promise((resolve, reject) => {
        exec(`node ${archivo}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error ejecutando ${archivo}:`, error);
                fs.appendFileSync('resultados.txt', `Error ejecutando ${archivo}: ${error}\n`);
                reject(error);
            } else {
                console.log(`Resultados de ${archivo}:`);
                console.log(stdout);
                fs.appendFileSync('resultados.txt', `Resultados de ${archivo}:\n${stdout}\n`);
                resolve();
            }
        });
    });
};

(async () => {
    try {
        fs.writeFileSync('resultados.txt', "Resultados de las pruebas:\n\n");
        await ejecutarPrueba('conexion-basica.js');
        await ejecutarPrueba('conexion-promesas.js');
        await ejecutarPrueba('conexion-pooling.js');
    } catch (error) {
        console.error("Hubo un error al ejecutar las pruebas.", error);
        fs.appendFileSync('resultados.txt', `Hubo un error al ejecutar las pruebas: ${error}\n`);
    }
})();