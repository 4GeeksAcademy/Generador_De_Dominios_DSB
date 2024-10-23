//Variables para generar los dominios
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.net', '.us', '.io'];

//Bucles "for of" (recorre el array adoptando directamente el valor) para generar la concatenación de las partes para cada dominio
for (let start of pronoun) { 
  for (let half of adj) {
    for (let end of noun) {
      for (let extension of ext )
      console.log("Dominios: "+start+half+end+extension); 
    }
  }
}