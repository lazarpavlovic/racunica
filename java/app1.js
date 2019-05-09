var ime  = document.getElementById("ime")
var prezime = document.getElementById("prezime")
var broj = document.getElementById("broj")
var dugme = document.getElementById("submit-dugme")
var reset = document.getElementById("reset-dugme")
var lista = document.getElementById("lista")



var brojac = 1;
function upisi_u_listu(){
    lista.innerHTML == "<li class= \"imenik\">"+ brojac +", broj: ", ime: " + ime.value + ", prezime: "+ prezime.value"
    ime.value = "";
    prezime.value = "";
    broj.value = "";
    brojac += 1;
}

function obrisi(){
    lista.innerHTML ="<p class=\"napomena\">  LISTA USPESNO OBRISANA </em>;
    setTimeout(function(){
        lista.innerHTML = "";
    }, 3000)
}


dugme.addEventListener("click", upisi_u_listu);
reset.addEventListener("click", obrisi);

var dugme1 = document.getElementById("dugme1")
function povecaj(){
    brojac = brojac + 1
}

var dugme2 = document.getElementById("dugme2")
function smanji(){
   brojac = brojac - 1
}

dugme1.addEventListener("click", povecaj);
dugme2.addEventListener("click", smanji);