
// Nom : exercices.js
// Date et auteur :
//
// Description :
//		Exercices en javascript
//		Calcul de la suite de Fibonacci
//		Ecriture de la fonction range(stop, [start], [step]) qui prend trois
// arguments en paramètre et renvoie le tableau des entiers compris entre
// start (inclus) et stop (exclu) avec un pas de step.
//




// Fonction Appeler_Fibonacci :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit le rang n dans l'entrée html
//		- appelle la fonction Fibonacci()
function Appeler_Fibonacci()
{
	// lecture de la valeur saisie qui est convertie en nombre
	const n = Number(document.forms["fibonacci"]["n"].value);
	
	// appel de la fonction Fibonacci
	let fibo = Fibonacci(n);
	
	// affichage du résultat dans la page html
	let resultat = document.getElementById("resultat_fibonacci").innerHTML = "Résultat : Fibonacci(" + n + ") = " + fibo;
}

// Retourne/renvoie la suite de Fibonacci au rang n
function Fibonacci(n)
{
	// contrôle du paramètre n
	if (!Number.isInteger(n) || n<0)
	{    
		return undefined;
	}
	
	// cas particulier
	if (n==0)
	{
		return 0;
	}

	// cas général
	let fibo2 = 0;
	let fibo1 = 0;
	let fibo = 1;
	for(let i=1; i<n; i++)
	{
		fibo2 = fibo1;
		fibo1 = fibo;
		fibo = fibo1 + fibo2;
	}
	return fibo; 
}




// Fonction Appeler_Range :
//		- appelée par un événement javascript depuis une page html (comme "onclick")
//      - lit les données dans les entrées html
//		- appelle la fonction Range()
function Appeler_Range() {
	const stop = Number(document.forms["range"]["stop"].value);
	const start = Number(document.forms["range"]["start"].value);
	const step2 = document.forms["range"]["step"].value;

	if(step2 == ""){
		var ran = Range(stop, start);
	} else {
		step = Number(step2);
		var ran = Range(stop, start, step);
	}

	if(ran == ""){
		ran = "Tableau Vide";
	} else {
		ran = "Range [" + ran + "]";
	}

	let resu = document.getElementById("resultat_range").innerHTML = ran;
}




// Fonction Range(stop, start=0, step=1)
// Retourne/Renvoie le tableau des entiers compris entre start (inclus) et 
// stop (exclu) avec un pas de step.
function Range(stop, start, step=1){
	var rangeArray = [];

	for(var i = start; i < stop;){
		rangeArray.push(i);
		i = i+ step;
	}

	return rangeArray.toString();
}



function AmpouleOnOff(){
	var image = document.getElementById("image").src;
	var img = image.search("pic_bulboff.gif");

	if(img != -1){
		var resul = document.getElementById("image").src = "images/pic_bulbon.gif";
	} else {
		var resul = document.getElementById("image").src = "images/pic_bulboff.gif";
	}
}


function writeText(txt) {
	document.getElementById("desc").innerHTML = txt;
}

function afficheImg(txt){

	if(txt == 'ven'){
		var ret = document.getElementById("img").src= "images/venglobe.gif";
	}else if(txt == 'sol'){
		var ret = document.getElementById("img").src= "images/sun.gif";
	}else if(txt == 'mer'){
		var ret = document.getElementById("img").src= "images/merglobe.gif";
	} else {
		var ret = document.getElementById("img").src= "";
	}

}