function promedio(a,b,c){
	if(a>=1 && a<=10 && b>=1 && b<=10 && c>=1 && c<=10 )
		return (a+b+c)/3
	else 
		return "ingrese  nota entre 1 y 10"
}

function nota(nota){
	if (nota<=6)
		console.log("Desaprobaste con "+nota);
	else 
		console.log("Aprobaste con "+nota);
}

nota(promedio(4,5,5));