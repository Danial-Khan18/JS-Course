// As we know that we have a numbe of data-types in Javascript namely:
// Strings, Numbers, Arrays, Objects, Bigint and Objects.
// But sometimes we aren't sure about the type of data that are gonna use beaciyse it can be extracted through different forms or server
//Then the concept of data-conversion comes into play.

// Here are some examples to explain the same thing....

let score = 33;

console.log(score);
console.log(typeof(score));

// Here the datatype of score is number coz we have made it strictly as a number.

//Now if we would have received a response from the server as :

let received_score="33";
console.log(received_score);
console.log(typeof(received_score));

// We know that the given variable is string  because it is being wrapped in double quotes
// And if we strictly try to convert it's datatype to number then, we will get a number and this method is called type-casting.


let converted_num=Number(received_score);
console.log(converted_num);
console.log(typeof(converted_num));

//But if try to convert a non-numeral type of data into number then we get some unexpected results.
//like below:

let new_number="231c1"
console.log(new_number);
console.log(`The data type of "new_number" is ${typeof(new_number)}.`)

let converted_new_num=Number(new_number);
console.log(`The output of "converted_new_num" is ${converted_new_num} and its datatype is ${typeof(converted_new_num)}`);
console.log(converted_new_num);

console.log(typeof(converted_new_num));

//similarly:

let bol=true;
converted_bol=Number(bol);
console.log(`The output of "converted_bol" is ${converted_bol} and its datatype is ${typeof(converted_bol)}`);

let new_var=undefined;
let converted_var=Number(new_var);
console.log(`The output of "converted_var" is ${converted_var} and its datatype is ${typeof(converted_var)}`);

let variable=null;
let converted_variable=Number(variable);
console.log(`The output of "converted_variable" is ${converted_variable} and its datatype is ${typeof(converted_variable)}`);