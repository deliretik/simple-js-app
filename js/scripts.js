pokemonsList= [
  {name:'Squirtle', type:'water', height:0.5},
  {name:'Wartortle', type:'water', height:1},
  {name:'Bulbasaur', type:['grass','poison'], height:0.7}
  ]           
           
for( let i = 0; i < pokemonsList.length; i++){
  if (pokemonsList[i].height >= 1) {
    document.write('<ul><li>' + pokemonsList[i].name + ' ( Height: ' + pokemonsList[i].height + ' )' + ' Wow, that\’s big!' + '</li></ul>')
  } else {
    document.write('<ul><li>' + pokemonsList[i].name + ' ( Height: ' + pokemonsList[i].height + ' )' + '</li></ul>')
  }
    };
          