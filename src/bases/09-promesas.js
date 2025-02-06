import {getHeroeById} from "./bases/08-imp-exp.js"

/*
const promesa = new Promise((resolve,reject) => {

    setTimeout( () => {
        const p1 = getHeroeById(2);
        resolve(p1);
        //reject('no se pudo encontrar el heroe');
    }, 2000)
});

promesa.then((heroe)=> {
    console.log('heroe', heroe)
})
.catch(error => console.warn(error));*/


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject) => {

        setTimeout( () => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject ('no se pudo encontrar')
            }
            //reject('no se pudo encontrar el heroe');
        }, 2000)
    });

    return promesa
}

getHeroeByIdAsync(3)
.then(console.log)
.catch(console.warn);