var imenik = {
    "ucenik": {"ime": "Lazar", "prezime": "Pavlovic"},
    "funkcija": function(niz_funkcija){
    niz_funkcija.reverse();
        for(var i = 0; i< niz_funkcija.length; i++){
            niz_funkcija[i]();
        }
        console.log("LAKI DAKI")
    }
}
function laki(){
    console.log("FICKI")
}

function raki(){
    console.log("DICKI")
}

function caki(){
    console.log("BICKI")
}

var niz = [laki,raki,caki];
console.log(imenik.ucenik)
console.log(imenik.funkcija(niz))





