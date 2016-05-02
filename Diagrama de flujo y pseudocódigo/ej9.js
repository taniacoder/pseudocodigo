
var costoxMinuto = 0.10;

var costo = function (tiempodLlamada){
	return tiempodLlamada*costoxMinuto
}

console.log ("El costo de la llamada es: S/." + costo(30))