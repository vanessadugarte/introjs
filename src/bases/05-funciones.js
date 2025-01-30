const saludar = function( nombre ){
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;


const saludar4 = () => `Hola, tú`;


console.log(saludar('Vane'))
console.log(saludar2('Vanessita'))
console.log(saludar3('holi'))
console.log(saludar4())

const getUser = () =>
    ({
        uid: 'abc',
        username: 'Nadja'
    })


console.log(getUser())


const getUsuarioActivo = (nombre) =>
    ({
        uid:'asdasd',
        username:'jinx'
    });

const usuarioActivo = getUsuarioActivo('fernando');
console.log(usuarioActivo);