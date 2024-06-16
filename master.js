// Tarea Maestro de Objetos.
const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
//Divisible por 3
const pokemonDivisibleBy3 = pokemon.filter(p => p.id % 3 === 0);
console.log("Pokémon con identificación divisible por 3:");
console.log(pokemonDivisibleBy3);

// tipo fuego
const pokemonTipoFuego = pokemon.filter(p => p.types.includes("fire"));
console.log("Pokémon de tipo fuego:");
console.log(pokemonTipoFuego);

//mas de un tipo
const pokemonMasDeUnTipo = pokemon.filter(p => p.types.length > 1);
console.log("Pokémon con más de un tipo:");
console.log(pokemonMasDeUnTipo);

//nombres
const nombresPokemon = pokemon.map(p => p.name);
console.log("Nombres de todos los Pokémon:");
console.log(nombresPokemon);

//Id mayor a 99
const nombresPokemonIdMayor99 = pokemon.filter(p => p.id > 99).map(p => p.name);
console.log("Nombres de Pokémon con identificación mayor que 99:");
console.log(nombresPokemonIdMayor99);

//tipo veneno
const nombresPokemonTipoVeneno = pokemon.filter(p => p.types.length === 1 && p.types.includes("poison")).map(p => p.name);
console.log("Nombres de Pokémon con único tipo veneno:");
console.log(nombresPokemonTipoVeneno);

//voladores
const primerTipoPokemonSegundoVolador = pokemon.filter(p => p.types.length > 1 && p.types[1] === "flying").map(p => p.types[0]);
console.log("Primer tipo de Pokémon cuyo segundo tipo es volador:");
console.log(primerTipoPokemonSegundoVolador);

// tipo normal
const cantidadPokemonTipoNormal = pokemon.filter(p => p.types.includes("normal")).length;
console.log(`Cantidad de Pokémon de tipo normal: ${cantidadPokemonTipoNormal}`);



