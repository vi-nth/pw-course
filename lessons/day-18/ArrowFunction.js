// function declaration (cach khai bao thu nhat)

function add(a, b) {
    return a + b;
}

//fundtion expression
const add2numbers = function (a, b) {
    return a + b;
}

// function expression => arrow function
const arrowAdd2numbers = (a, b) => {
    return a + b;
}

// destructur
const arrowAdd2numbersDestruct = ({ a, b }) => {
    return a + b;
}

// single return
const arrowAddnumbers = (a, b) => a + b;

// no return
const arrowAddnumbers1 = (a, b) => console.log("");

// demo, neu 1 param num =>num, neu 2 param tro len (a,b)
const intArray = [1, 2, 3, 4, 5];
const evenNums = intArray.filter(value => value % 2 === 0);

//lexical this binding
const person = {
    name: 'an',
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`); 200
        },);
    }
}