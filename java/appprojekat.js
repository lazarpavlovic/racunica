var body = document.getElementById("body")
var broj = document.getElementById("broj")
var submit = document.getElementById("submit-dugme")
var imenik = document.getElementById("imenik")
 


var imenik = {
    "0644531329": {"ime": "Lazar", "prezime": "Pavlovic"},
    "0652771849": ("ime": "Dragan", "prezime": "Pavlovic")
}

fuction upisi_ime_i_prezime_u_p_element(){
    var input = document.getElementById("broj")
    var broj = input.value 


    var ispisi_broj = document.getElementById("ispisi_broj")
    var ime = document.getElementById("ime")
    var prezime = document.getElementById("prezime")



    ispisi_broj.innerHTML = "<em>Korisnikov broj:</em>" + broj
    ime.innerHTML = "<em>Korisnikovo ime:</em>" + imenik[broj]["ime"]
    prezime.innerHTML = "<em>Korisnikovo prezime:</em>" + imenik[broj]["prezime"]
    input.value = "";
}
 
  
  submit.addeventlistener("click", upisi_ime_i_prezime_u_p_element)