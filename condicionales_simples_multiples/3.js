var num;
function positivo(num){
	num	=prompt("Ingresa un numero")

	if(num>=0)
		return "el número es positivo o cero"
	else 
		return "el número es negativo"
}

document.write (positivo(num));

