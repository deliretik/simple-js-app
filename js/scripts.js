    let pokemonRepository = (function () {
      let repository = [
            {name:'Squirtle', type:'water', height:0.5},
            {name:'Wartortle', type:'water', height:1},
            {name:'Bulbasaur', type:['grass','poison'], height:0.7}
    ];
    
      function add(pokemon) {
        repository.push(pokemon);
      }
    
      function getAll() {
        return repository;
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
    let pokemonUnorderedList = document.querySelector('.pokemon-list');
    let pokemonListItem = document.createElement('li');
    let pokemonButton = document.createElement('button');
      pokemonButton.innerText = pokemon.name;
      pokemonButton.classList.add('button-class');
      pokemonListItem.appendChild(pokemonButton);
      pokemonUnorderedList.appendChild(pokemonListItem);
    });
    
    