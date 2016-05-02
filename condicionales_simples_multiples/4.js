function descuento(precio){
	if(precio>=2500)
		return precio*0.15;
	else 
		return precio*0.08;
}

function preciofinal(precio){
	return precio-descuento(precio);
}

document.write ("El precio final es $"+preciofinal(6000)+"y el descuento aplicado fue de $"+descuento(6000));