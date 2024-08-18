// Template - Data Model/ user-defined data
class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }

    //Setters
    set name(name){
        this._name = name;
    }

    // Getters
    get name(){
        return this._name;
    }
}

let an = new Person("An", 18);
console.log(an);

// Invoke setter
an.name = "Anna";
console.log(an.name);




