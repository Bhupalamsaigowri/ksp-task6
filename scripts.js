console.log("Welcome to the world guys");
//boolean
let bool=true;
let bool1=false;
//logical operator
let num1=12;
let num2=13;
console.log(num1>num2&&num1==13);
console.log(num1<num2&&num1==13);
console.log(num1>num2&&num2==13);
console.log(num1<num2&&num2==13);
console.log(num1==12||num2==13);
console.log(num1==23||num2==13);
console.log(num1==23||num2==53);
console.log(!(num1==23||num2==53));
console.log(!(num1==12&&num2==13));
//functions
function reading(){
    console.log("hello world reading");
}
function writing(){
    console.log("bhavya");
}
function playing(){
    console.log("playing game");
}
reading();
writing();
playing();
let digit1=33;
let digit2=44;
function addition(){
    console.log(digit1+digit2);
}
addition();
function addition(digit1,digit2){
    console.log(digit1+digit2);
}
addition(22,33,55);
function addition(digit1,digit2,digit3){
    console.log(digit1+digit2+digit3);
}
function subtraction(digit1,digit2){
    console.log(digit1-digit2);
}
let name="jai dev";
console.log(name.length);


