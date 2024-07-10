const people = ['Aaron',',Mel','Jhon'];
const one = 1;
const str = 'Hello World';
const b = true;
const employee = {fristName: 'Pakin',lastName:'Wasu'};

function sayHello(person){
    console.log('Hello '+person.fristName);
}
console.log(typeof people);
console.log(typeof sayHello)
console.log(employee instanceof Array)
sayHello(employee);