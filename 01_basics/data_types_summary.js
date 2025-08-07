// Although we will encounter a large number of data-types in javascript, but according to the official mdn documentation the Data_types can be mainly classified into two types i.e.
// Primitive Datatypes and Non-Primitive (Reference Type) Datatypes.

// Primitive Datatypes:
// Primitive datatypes are those whose direct memory references are not given to us , only copies of these datatypes are provided and all the changes are made in these copies only.

// There are 7 primitive datatypes:
// Strings, Numbers, Booleans, BigInt, Symbol, Undefined, Null

// Non-Primitive Datatypes include:
// Arrays, Objects,Functions.

// Also JavaScript is a dynamically typed language it does not require the data-type of a variable to be defined while declaring;
// We can always declare a variable without defining its datatype and we can certainly change it's value as we want in future which is an amazing feature of dynamically typed languages.


const Id =Symbol("123");

const new_Id=Symbol("123");

console.log(Id);
console.log(new_Id);

console.log(Id==new_Id);
console.log(Id===new_Id);