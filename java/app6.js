let recnik = {
    "ime": "lazar",
    "prezime": "pavlovic"
}

for(let[kjuc, vrednost] of Object.entries(recnik)){

}




class user {
        constuctor(name) {
            this.name = name;
        }
}
 sayHi() {
     alert(this.name);
 }

}

let user = new user("John");
user.sayhi();





class user {
    constructor(name) {this.name = name; }
    say.Hi() { alert(this.name); }
}

// proof: user is the "constructor" function 
alert(user === user.prototype.constructor); // true

// proof: there are two methods in its "prototype"
alert(object.getOwnpropertynames(user.prototype)); // constructor, sayHi



class user {
    constuctor() {}
}

alert(typeof user); // function 
user(); // erorr: class constructor user cannot be invoked witout "new"




class user {

    constructor(name) {
        // invokes the setter
        this.name = name;

    }
    get name() {
        return this._name;
    }

    set name (value) {
        if (value.length < 4) {
            alert("Name is too short.")
            return;
        }   
        this._name = value;
    }

}

let user = new user("John");
alert(user.name); // John

user = new user(""); // name too short




class user { }

user.prototype.test = 5;

alert( new user().test ); // 5




class user {
    get test() {
        return 5;
    }
}

alert( new user().test ); // 5