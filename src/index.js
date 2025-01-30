const unaCosa = {
    nombre: 'jinx',
    edad: 20,
    clave: 'sylco',
    mascota: 'colibri'
};

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
    mascota: 'perro'
};


const otraCosa = {
    nombre: 'sakura',
    edad: 16,
    clave: 'kero',
};
/*const {nombre, edad, clave} = persona;

console.log(nombre)
console.log(edad)
console.log(clave)*/

const retornaPersona = ({nombre, edad, mascota = 'poro'}) => {
    // console.log (nombre, edad, mascota);
     return {
         nombreClave: mascota,
         anios: edad
     }
}

const prueba = retornaPersona(unaCosa);

console.log(prueba)