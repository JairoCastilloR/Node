const fs = require('fs');

fs.writeFile('./pete.txt', 'Linea uno 1 etc12', function(err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado')
})


fs.readFile('./pete.txt', function(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toJSON());
})


console.log('ultima linea de codigo')