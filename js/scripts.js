    // let pokemonRepository = (function () {
    //   let repository = [
    //         {name:'Squirtle', type:'water', height:0.5},
    //         {name:'Wartortle', type:'water', height:1},
    //         {name:'Bulbasaur', type:['grass','poison'], height:0.7}
    // ];
    
    //   function add(pokemon) {
    //     repository.push(pokemon);
    //   }
    
    //   function getAll() {
    //     return repository;
    //   }
      
    //   function addListItem(pokemon){
    //     let pokemonUnorderedList = document.querySelector('.pokemon-list');
    //     let pokemonListItem = document.createElement('li');
    //     let pokemonButton = document.createElement('button');
    //       pokemonButton.innerText = pokemon.name;
    //       pokemonButton.classList.add('button-class');
    //       pokemonListItem.appendChild(pokemonButton);
    //       pokemonUnorderedList.appendChild(pokemonListItem);
    //       pokemonButton.addEventListener('click', function () {
    //         showDetails(pokemon)
    //       });
    //   }; 

    //   function showDetails(pokemon){
    //     console.log(pokemon);
    //   };
      
    //   return {
    //     add: add,
    //     getAll: getAll,
    //     addListItem: addListItem
    //   };
    // })();
    
    // //foreach function
    // pokemonRepository.getAll().forEach(function(pokemon){
    //   pokemonRepository.addListItem(pokemon);
    // });
    
    let pokemonRepository = (function () {
      let pokemonList = [];
      let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
      
      
      function add(pokemon) {
        pokemonList.push(pokemon);
      }
    
      function getAll() {
        return pokemonList;
      }
      
      function addListItem(pokemon){
        let pokemonUnorderedList = document.querySelector('.pokemon-list');
        let pokemonListItem = document.createElement('li');
        let pokemonButton = document.createElement('button');
          pokemonButton.innerText = pokemon.name;
          pokemonButton.classList.add('button-class');
          pokemonListItem.appendChild(pokemonButton);
          pokemonUnorderedList.appendChild(pokemonListItem);
          pokemonButton.addEventListener('click', function () {
            showDetails(pokemon)
          });
      }; 
      
      function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }
      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
      }




      function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
          console.log(pokemon);
        });
      }
      
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
      };
    })();
    
    //foreach function
    pokemonRepository.loadList().then(function() {
      pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });