while (condition) {
    // code
    // so-called "loop body"
}




let i = 0;
while (i<13) { // shows 0, then 1, then 2
     alert( i )
     i ++;
}



let i = 3;
while ( i) { // when i becomes 0, the condition become falsy, and the loop stops
alert ( i );
i ++;
}




let = 1;
while (i) alert(i--);




do {
    // loop body
} while (condition);




let i = 0;
do {
    alert( i );
    i ++;
} while( i < 13 );




for (begin; condition; type;) {
    // .... loop body ...
}




for(let i = 0; i < 3; i ++) { // shows 0; then 1; then 2;
     alert(i);
}




for( let i = 0; i < 3; i ++) {
    alert (i); // 0, 1, 2,
}
alert(i); // erorr, no such variable




let i = 0;

for(i = 0; i <3; I ++) { // use an existing variable
      alert(i); // 0, 1, 2
}

alert(i) // 3, visible, because declared  outside //#endregion of the loop




let i = 0;

for(; i < 3; ) {
    alert( i++ );
}




let sum = 0;

while (true) {

    let value = +promt("enter a number", "");

    if (!value) break; // (*)

    sum += value;

}
alert( "sum:", + sum);




for (let i = 0; i  < 10; i++) {
     
    // if true, skip the remaining  part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}




for (let i = 0; i < 10; i++) {

    if (i % 2) {
        alert( i );
    }
}



for ( let i = 0; i < 3; i++) {

    for ( let j = 0; j < 3; j++) {

        let input = pormt (`value at coords (${i},${j})`, "" );
        
        // what if i want to exit from here to Done (below)?

    }
}

alert(`done!`);




outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = promt(`vaule at coords (${i}, ${j})`, "")

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        // do something with the value...
    }
}

alert("done!");




outer: 
for (let i = 0; i < 3; i++) { ... }




break label; // jumbs to label? no.

label: for (...)