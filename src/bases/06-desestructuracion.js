
const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
};

const ejemplo2 = {
    nombre: 'jinx',
    edad: 17,
    clave: 'clavelin',
};


const useContext = ({clave,edad}) => {

   return {
       nombreClave: clave,
       anios: edad,
       latlng:{
           lat:14.454,
           lng:20.246
       }
   }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios)
console.log(lat,lng)


