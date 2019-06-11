//required
const fs = require('fs');
var colors = require('colors');
//Otra forma de exportar la función
//module.exports.crearArchivo = (base) => {

//limite = 10 por si no mandan valor que se pongan por defecto el valor 10 : v
let listarTabla = (base, limite = 10) => {
    console.log('========================='.yellow);
    console.log(`tabla de ${ base }`.yellow);
    console.log('========================='.yellow);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i}`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número `);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base } - ${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base } - ${ limite }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}