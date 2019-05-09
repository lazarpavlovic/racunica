var dugme1 = document.getElementById ("dugme1")
var dugme2 = document.getElementById ("dugme2")
var rezultat = document.getElementById ("rezultat")

var brojac = 0;

function povecaj (){
    brojac = brojac + 1 
    rezultat.innerHTML = brojac
}

function smanji (){
    brojac = brojac - 1
    rezultat.innerHTML = brojac
}

dugme1.addEventListener("click",povecaj);
dugme2.addEventListener("click",smanji);

