import { Pokemon } from './decorators/pokemon-class';

const charmander = new Pokemon( 'Charmander' );

// ( Pokemon.prototype as any ).customName = 'Pikachu';

// charmander.savePokemonDB( 10 );
// charmander.toString();
// console.log( charmander.toString() );

charmander.publicApi = 'https://fernando-herrera.com';

console.log(charmander);
