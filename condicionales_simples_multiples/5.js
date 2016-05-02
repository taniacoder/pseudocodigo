var a;
var b;
var c;
function mayor (a,b,c){
	a = prompt("ingrese 1er numero");
	b = prompt("ingrese 2er numero");
	c = prompt("ingrese 3er numero");
	
 if (a>=b && a>=c)
 	return "El numero mayor es" + " " + a
 else if (b>=a && b>=c)
 	return "El numero mayor es" + " " + b
 else if (c>=a && c>=b)
 	return "El numero mayor es" + " " + c
}

document.write (mayor(a,b,c));

