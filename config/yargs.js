const confdefault = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', confdefault)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', confdefault)
    .help()
    .argv;


module.exports = {
    argv
}

// const argv = require('yargs')
// .command('listar', 'Imprime en consola la tabla de multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//     base: {
//         demand: true,
//         alias: 'b'
//     },
//     limite: {
//         alias: 'l',
//         default: 10
//     }
// })
// .help()
// .argv;