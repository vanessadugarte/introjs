import heroes, {owners} from "../data/heroes.js";

//console.log(owners)
/* getHeroeById = (id) =>  {
   return heroes.find((heroe) => {
       if (heroe.id === id) {
           return true;
       } else {
           return false;
       }
   });
} */

export const getHeroeById = (id) => heroes.find (heroe => heroe.id === id);
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroesByOwner('DC'));
//console.log(getHeroById(1));