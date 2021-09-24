// pokemonsList= [
//     {name:'Squirtle', type:'water', height:0.5},
//     {name:'Wartortle', type:'water', height:1},
//     {name:'Bulbasaur', type:['grass','poison'], height:0.7}
// ]

// /*if(pokemons.size > 1.5){console.log('this is a big pokemon!!!')}
// else if(pokemons.size > 0.5 && pokemons.size < 1.5){console.log('this is an average pokemon !!!')}
// else {console.log('this is a small pokemon !!!')}*/

// for (let i = 0; pokemonsList.length; i++)
//     if(pokemonsList[i].height <0.7){
//     document.write('<ul><li>' + pokemonsList[i].name + ' is a small pokemon.' + '</li></ul>')}
//     else if(pokemonsList[i].height >=0.7 && pokemonsList[i].height <1){
//     document.write('<ul><li>' + pokemonsList[i].name + ' is an average pokemon.' + '</li></ul>')}
//     else if(pokemonsList[i].height >=1){
//     document.write('<ul><li>' + pokemonsList[i].name + ' is a big pokemon.' + '</li></ul>')};


    pokemonsList= [
      {name:'Squirtle', type:'water', height:0.5},
      {name:'Wartortle', type:'water', height:1},
      {name:'Bulbasaur', type:['grass','poison'], height:0.7}
  ]
  
  /*if(pokemons.size > 1.5){console.log('this is a big pokemon!!!')}
  else if(pokemons.size > 0.5 && pokemons.size < 1.5){console.log('this is an average pokemon !!!')}
  else {console.log('this is a small pokemon !!!')}*/
  
  for (let i = 0; i< pokemonsList.length; i++)
      if (pokemonsList[i].height <0.7){
      document.write('<ul><li>' + pokemonsList[i].name + ' is a small pokemon.' + '</li></ul>')}
      else if (pokemonsList[i].height >=0.7 && pokemonsList[i].height <1){
      document.write('<ul><li>' + pokemonsList[i].name + ' is an average pokemon.' + '</li></ul>')}
      else if(pokemonsList[i].height >=1){
      document.write('<ul><li>' + pokemonsList[i].name + ' is a big pokemon.' + '</li></ul>')};
  
  
  //loop
   for (let i = 0; i< pokemonsList.length; i++) 
       if (pokemonsList[i].height <0.7){
           document.write('<ul><li>' + pokemonsList[i].name + ' ( Height: ' + pokemonsList[i].height + ' )' + ' that\'s a small pokemon.' + '</li></ul>')
       }else if (pokemonsList[i].height >=0.7 && pokemonsList[i].height <1) {
           document.write('<ul><li>' + pokemonsList[i].name + ' ( Height: ' + pokemonsList[i].height + ' )' + ' that\'s an average pokemon.' + '</li></ul>')
      //  }else if(pokemonsList[i].height >=1){
       }else{
           document.write('<ul><li>' + pokemonsList[i].name + ' ( Height: ' + pokemonsList[i].height + ' )' + ' that\'s a big pokemon.' + '</li></ul>')};
       
 