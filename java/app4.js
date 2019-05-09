let arr = ["I", "go", "home"];

delete arr[1]; //remove "go"

alert( arr[1] ); // undefined;

// now arr = ["I", , "home"];
alert( arr.length ); // 3



arr.splice(index[, deleteCount, elem1, ..., elemN])



let arr = ["I", "study", "JavaScript"];

arr.splice(1,1); // from index 1 remove 1 element

alert( arr ); // ["I", "JavaScript"]



let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first element and replace them with another
arr.splice(0,3, "let's", "dance")

alert( arr ) // now ["let's", "dance", "right", "now"]



let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements 
let removed = arr.splice(0,2);

alert( removed ); //"I", "study" <-- array of removed elements



let arr = ["I", "study", "JavaScript"]

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, "complex", "language");

alert( arr ); //"I", "study", "complex", "language", "JavaScript"



let arr = [1,2,5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4 
arr.splice(-1,0,3,4);

alert( arr ); // 1,2,3,4,5



let str = "test";
let str = ["t", "e", "s", "t"];

alert( str.splice(1, 3) ); // es
alert( str.splice(1,3) ); // e,s

alert( srt.splice(-2) ); // st
alert( srt.splice(-2) ); // s,t



let arr = [1,2];

// merge arr with [3,4]
alert( arr.concat([3,4])); // 1,2,3,4

// merge arr with [3,4]
alert( arr.concat([3,4], [5,5])); // 1,2,3,4,5,6

// merge arr with [3,4], then add values 5 and 6
alert( arr.concat([3,4], 5 , 6)); // 1,2,3,4,5,6



let arr = [1,2]

let arrayLike = {
    0: "Something",
    length: 1
};

alert( arr.concat(arrayLike) ); // 1,2,[object Object]
//[1,2 arrayLike]



let arr = [1,2]

let arrayLike = {
    0: "Something",
    1: "else",
    [Symbol.isConcatSpreable]: true,
    length: 2
};

alert( arr.concat(arrayLike) ); // 1,2,something, else



arr.forEach(function(item, index, array) {
    // ... do something with item
  });



  // for each element call alert
  ["Bilbo", "Gandalf", "Nazgul"]. forEach(alert);



  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array)) => {
        alert(`${item} is at index ${index} in ${array}`);  
  });



  let arr = [1, 0, false];

  alert( arr.indexOf(0) ); // 1
  alert( arr.indexOf(false) ); // 2
  alert( arr.indexOf(null) ); //-1
  
  alert( arr.includes(1) ); // true



  consta arr = [NaN];
  alert( arr.indexOf(NaN) ); // -1 (should  be 0, but === equality doesn't work for NaN )
  alert( arr.includes(NaN) ); // true (corrcet)



  let result = arr.find(function(item, index, array ) {
      // if true  is  returned, item is returned and iteration stopped
      // for falsy scenario returns undefined
  });



  let users = [
      {id: 1, name: "John" }
      {id: 2, name: "Pete" }
      {id: 3, name: "Mary"}
  ];

  // returns array of the first two users 
  let someUsers = users.filter(item =>  item.id < 3);
    
  alert(some.someUsers.length); // 2



  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map (item => item.length);
  alert(lengths); // 5,7,6



  let arr = [ 1,2,15 ]

  // the method reorders the content of ar( and returs it)
  arr.sort();

alert( arr ); // 1,15,2



function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr = [ 1, 2, 15 ];
  
  arr.sort(compareNumeric);
  
  alert(arr);  // 1, 2, 15



  [1, -2, 15, 2, 0, 8].soft(function(a, b) {
      alert( a + "<>" + b);
});



let arr = [1, 2, 15];

arr.sort(function(a,b) {return a - b; });

alert(arr); // 1, 2, 15



let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert( arr ); // 5, 4, 3, 2, 1



let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(", ");

for (let name of arr ) {
    alert( "A message to ${name}." ); // A message to Bilbo  (and other names)
}



let arr = ["Bilbo', 'Gandalf', 'Nazgul"];

let str = arr,join(";");

alert( str ); // Bilbo;Gandalf;Nazgul



let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15



let value = arr.reduce(function(previousValue, item, index, array){
    // ...
}, initial);



let array = [1, 2, 3, 4, 5];

// removed initial  value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current);

alert(result); // 15



alert(typeOf {}); // object
alert(typeOf {}); // same



alert(Array.isArray({})); // false

alert(Array.isArray([])); // true



let user = {
    age: 18,
    youger(otherUser) {
      return otherUser.age < this.age;
        }
};

let users = [
    {age: 12}
    {age: 16}
    {age: 32}
];

// find all user younger than user
let youngerUsers = users.filter(user.younger, user);

alert(youngerUsers.length); // 2