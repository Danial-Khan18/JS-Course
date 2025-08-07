// Question:  What are Operators?

// Answer:  Operators are kind of symbols that are used to perform some function, task or an operation on its operands(values).

//There are different types of operators in JavaScript, which we will discuss in detail these are:

/*  Arithmetic Operators
    Assignment Operators
    Logical Operators
    Bitwise Operators
    Comparison Operators
    String Operators
    Ternary Operators
    Type Operators
 */

/*
Arithmetic Operators are used to assign values to variable:  let x = 90; 

It can also be used as a short hand incremental assignment operators  like  let x=89;  x+=1 , which is equivalent to x=x+1;

Similarly each arithmetic operator can be used in a similar way before the assignment operator
*/

/*
Comparsion Operators are used to compare values, there are different comparison operators like >, <, <=, >= or ==.

*/


let x = 90;     // we have assigned the value 90 to a variable named "x".

const number=1003289;

x+=10;

console.log(x);      // output : 100


// Using the comparison operators:

console.log(89<100);   //output: true

let number1=121;
let number2=1001;

if(number1<number2){
    console.log("Yes you are right")
}

else{
    console.log("oops, the other number is greater.")
}


/// Behaviour of comparison operators with different data-types.

console.log(null>0);     // output : flase
console.log(null<0);     // output : flase
console.log(null==0);    // output : flase
console.log(null>=0);       // output : true

// in case of "null" the < , > operators first convert the null into number which is zero and then they compare it which is the reason of a different result of the last statement.

console.log(undefined>0);     // output : flase
console.log(undefined<0);     // output : flase
console.log(undefined==0);    // output : flase
console.log(undefined>=0);       // output :false

// In case of undefined the value remains undefined itself.