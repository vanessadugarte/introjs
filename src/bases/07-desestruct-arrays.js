const personajes = [ 'Jinx','Vi', 'Vander' ,'Heimer', 'Ekko'];

const [,,p3,,p4] = personajes;

console.log(p4);

const retornaArreglo = () => {
    return ['ABC', '123', 'cosa'];
}

const [letras,numeros, cosa] = retornaArreglo();

console.log(letras, numeros, cosa);


const useState = (valor) => {
    return [valor, ()=> {console.log('Hola Mundito')}];
}

const [nombre, setNombre] = useState('Planta');

console.log(nombre);
setNombre('HI');