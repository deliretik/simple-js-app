//forEach function
let pokemonList = [
  {name:'Squirtle', type:'water', height:0.5},
  {name:'Wartortle', type:'water', height:1},
  {name:'Bulbasaur', type:['grass','poison'], height:0.7}
];
pokemonList.forEach(function(pokemon){
    document.write(pokemon.name + ': ' + '</br>' + 'Height: '+ pokemon.height + '</br>' + 'Type: ' + pokemon.type + '<br>' + '<br>')
});

//wrapping the array in a IIFE
//creating a pokemonRepository and assigning it to pokemonlist
    let pokemonRepository = (function () {
      let pokemonList = [
            {name:'Squirtle', type:'water', height:0.5},
            {name:'Wartortle', type:'water', height:1},
            {name:'Bulbasaur', type:['grass','poison'], height:0.7}
    ];
    
      function add(pokemon) {
        pokemonList.push(pokemon);
      }
    
      function getAll() {
        return pokemonList;
      }
    
      return {
        add: add,
        getAll: getAll
      };
    })();

    //test (+)
    //console.log(pokemonRepository.getAll());
    
    //foreach function
    pokemonRepository.getAll().forEach(function(pokemon){
      document.write(pokemon.name + ': ' + '<br>' + 'height: ' + pokemon.height +  '<br>' + 'type: ' + pokemon.type + '<br>' + '<br>')
    });
    
    