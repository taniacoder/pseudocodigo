
var num1;
var num2;
function mayor(num1,num2){
	num1= prompt("ingresa el 1er numero");
	num2= prompt("ingresa el 2do numero");

	if (num1>=num2)
		return ("el mayor es " +num1);
	else 
		return ("el mayor es " +num2);
}

document.write (mayor(num1,num2));