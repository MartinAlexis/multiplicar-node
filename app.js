// requiereds


const argv = require('./config/yargs').argv;
// var colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplcar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        console.log('El limite es', argv.limite);
        console.log(argv.limite);
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(error => console.log(error));
        console.log('crear');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


//console.log(argv);








// console.log(process.argv);

// let argv2 = process.argv;

// console.log('limite,', argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);