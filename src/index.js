import { getHeroeById } from "./bases/08-imp-exp.js";

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve,reject) => {

        setTimeout( () => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject ('no se pudo encontrar nada')
            }
        }, 2000)
    });

}

getHeroeByIdAsync(13)
    .then(console.log)
    .catch(console.warn);


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomValue = Math.random(); // 🎲 Genera un número aleatorio
        console.log("🔢 Valor de Math.random():", randomValue); // 📌 Lo mostramos en consola

        if (randomValue > 0.5) {
            resolve("foo");  // ✅ Éxito
        } else {
            reject("Error: algo salió mal");  // ❌ Falla
        }
    }, 300);
});

myPromise
    .then((resultado) => console.log("✅ Éxito:", resultado))
    .catch((error) => console.error("❌ Error:", error));