const account_id="Dani89121";
let account_email_id="khandanial222@gmail.com";
let account_password="danialkhan@123";

console.log(account_email_id);
console.log(account_id);
console.log(account_password);

console.log(`The datattype of account_id is ${typeof(account_id)}`);

console.table([account_email_id,account_id,account_password]);


// Inside JavaScript the variables can be declared using three keywords ie "let", "const","var".
// Variables declared with "var" are Function and Global Scoped.
// The variables should be declared first before assigning a value to  it.

let x=89;
let name="Danial Khan";

var age=90;

//printing these variables , we have:

console.log(x);

console.log(name);
console.log(age);

// The redeclaration of the variables using "var" keyword is possible.

var age=19;
console.log(age);  //output: 19

// Redeclatration is not allowed using let and const keyword.


// let x=90;    // Will throw an error.

//const keyword is used for variables whose values cannot be changed on later stages in a program.

// While var is a global scoped , "let" keyword is block and function scoped 

{
    var key="Skoda"
    console.log(key);
}

console.log(key);     // Both the log statements will print the same output.

// This thing cannot be done using the "let" keyword.

{
    let car="volkswagen"
    console.log(car);
}

// console.log(car);

function sum (){
    let x=input("Enter first integer");
    let y=input("Enter second integer");
    console.log(x+y);
}

function print(){
    let x=190;
    console.log(x);
}
print();
// console.log(x);

function print2(){
    var z=78;
    console.log(z);
}

x=-1;
console.log(x)

let number=BigInt(2**53+3);
console.log(number);
console.log(typeof(number));
