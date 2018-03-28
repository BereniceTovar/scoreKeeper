var scores = {}; //va a llevar el registro de los jugadores ni sus puntos.
console.log(scores);
//Creando las llaves del objeto name / objeto(scores)
function createPlayer(object, name) {
   object[name.toLowerCase()] = 0;
   console.log(object);
}
//Asignando los valores a las keys de arriba.
function addPoints(name, points){
  scores[name.toLowerCase()] += points;
  console.log(scores);
}

function printAllPoints() {
  var arrayPlayers = Object.keys(scores);
  /*necesitamos variable auxiliar / dandole formato a como quiero que se impriman los resultados.Los scores de l@s jugadorxs. scorePlayers-resultados.*/
  var resultados = " ";
  /*variable que tiene los keys de mi objeto(los nombres)
   console.log(arrayPlayers); (arrayPlayers porque es el arreglo donde estaremos iternado)*/
  for(var k =0; k<arrayPlayers.length; k++){
  /*Obteniendo todas las keys (los nombres) + y sus valores (resultados).*/
    resultados += arrayPlayers[k] + ': ' + scores[arrayPlayers[k]] + ', ';
    if (k == arrayPlayers.length -1){ //se verifica que estemos en la ultima posición/ último index.
      resultados += arrayPlayers[k] + ': ' + scores[arrayPlayers[k]];
    } else { //si no es el ultimo indice se pone la coma de separación (puede ser coma o salto de linea.)
      resultados += arrayPlayers[k] + ': ' + scores[arrayPlayers[k]] + ', ';
    }
      console.log(resultados);
  }
  return resultados;

}

createPlayer(scores, 'Ana');
addPoints('ana', 20);
addPoints('ana', 40);
createPlayer(scores, 'Silvana');
addPoints('Silvana', 50);
console.log(printAllPoints());
