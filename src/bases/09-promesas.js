import { getHeroeById } from "./08-imp-exp.js";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject) => {

        setTimeout( () => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject ('no se pudo encontrar')
            }
        }, 2000)
    });
}

getHeroeByIdAsync(341)
    .then(console.log)
    .catch(console.warn);