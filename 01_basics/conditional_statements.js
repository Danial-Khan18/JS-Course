// let accessallowed;
// let age = prompt("What is your age?","12");
// if (age>18){
//     accessallowed=true;
// }
// else if (age<18){
//     accessallowed=false;
// }
// alert(accessallowed);

let accessallowed=(age>18) ? true:false;

let a = Number(prompt("Give the value of 'a':"," "));
let b = Number(prompt("Give the value of 'b':"," "));

let result;
result=(a+b<4) ? "Below":"Over";
alert(result)

let login=prompt("Choose the designation between('Director','Employe',' ')")

let message=(login=="Employe") ? "Hello":
(login=="Director") ? "Greetings":
(login==" ")? "No Login":
" ";