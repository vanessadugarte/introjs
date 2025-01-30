const persona = {
nombre: 'Tony',
apellido: 'prueba',
edad: 45,
    direccion: {
    ciudad:'new york',
        zip:'111',
        lat:'222',
        lgn:'333'
    }
}

//console.table({persona});

console.log(persona);

const persona2 = {...persona};

console.log(persona2)
persona2.nombre= 'peter';

console.log(persona2)
console.log(persona)