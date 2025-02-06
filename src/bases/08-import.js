import heroes, {owners} from "./data/heroes.js";

console.log(owners)
/*const getHeroeById = (id) =>  {
    return heroes.find((heroe) => {
        if (heroe.id === id) {
            return true;
        } else {
            return false;
        }
    });
}*/

const getHeroById = (id) => heroes.find (heroe => heroe.id === id);
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));
console.log(getHeroById(1));