var ime = document.getElementById("ime");
var prezime = document.getElementById("prezime");
var broj = document.getElementById("broj");
var dugme = document.getElementById("submit-dugme");
var lista = document.getElementById("ista");



function upisi_u_listu(){
  lista.innerhtml =="<li> broj" + broj.value + ", ime:" + ime.value + ", prezime:" + prezime.value +"</li>";
  ime.value = "";
  prezime.value = "";
  broj.velue = "";
}

dugme.addeventlistener("click" , upisi_u_listu)
