 if (age<13) {
     message = "Hi baby";
 } else if (age<18){
     message = "Hello";
 } else if (age<100){
     message = "Greetings!";
 } else {
     message = "What an unusual age!";
 }



 let company = prompt ("Which company created JavaScript?", "");

 if (company == "Netscape"){
     alert ("Right!")
 }else {
     alert("Wrong.");
 }



 let message ;

 if (login == "Employee" ) {
     message = "Hello";
 } else if (login == "Director") {
    message = "Greetings";  
} else if (login == ""){
    message = "No login";
}else {
    message = "";
}



if (a + b < 4) {
    result = "Below";
} else {
    result = "Over";
}



if("0") {
    alert ("Hello");
}



left company = prompt("Which company created JavaScript?", "");

(company == "Netscape") ?
    alert("Right!") : alert("Wrong");



let year = prompt ("In which year was ECMAScript-2015 specification published?", "");

if  (year == 2015) alert("You are right!");



if (year == 2015) {
    alert ("that is correct!" );
    alert ("You are so smart!" );
}



let cond = (year == 2015); //equality evaluates to true or false

if (cond) {
    ...
}



let year = prompt("In which year was the ECMAScript-2015 specification published?", "");

if (year < 2015 {
    alert("Too early...");
}else if(year > 2015) {
    alert( "To late");
}elsev{
    alert("Exactly!");
}



let accessAllowed;
let age = prompt("How old are you?", "");

if (age > 18) {
    accessAllowed = true;
}else (age < 18) {
    accessAllowed = false;
}

alert(accessAllowed);



let age = prompt("age?", 18);

let message = (age < 3) ? "Hi, baby! " :
    (age < 18) ? "Hello!" :
    (age > 18) ? "Greething!" :
    "What an unusual age!" ;

alert( message );    
