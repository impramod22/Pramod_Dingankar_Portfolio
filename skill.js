let number = document.getElementById("number");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let counter9 = 0;
let counter10 = 0;
let counter11 = 0;
let counter12 = 0;
// let counter = 0;
setInterval(() => {
    if(counter9 == 65){
        clearInterval();
    }else{
    counter9 += 1;
    number.innerHTML = counter9 + "%";
    }
    if(counter10 == 75){
        clearInterval();
    }else{
    counter10 += 1;
    number1.innerHTML = counter10 + "%";
    }
    if(counter11 == 85){
        clearInterval();
    }else{
    counter11 += 1;
    number2.innerHTML = counter11 + "%";
    }
    if(counter12 == 80){
        clearInterval();
    }else{
    counter12 += 1;
    number3.innerHTML = counter12 + "%";
    }
}, 30);




let num = document.getElementById("num");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");

let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

setInterval(() => {
    if(counter == 95){
        clearInterval();
    }else{
    counter += 1;
    num.innerHTML = counter + "%";
    }
}, 30);

setInterval(() => {
    if(counter1 == 85){
        clearInterval();
    }else{
    counter1 += 1;
    num1.innerHTML = counter1 + "%";
    }
}, 30);

setInterval(() => {
    if(counter2 == 65){
        clearInterval();
    }else{
    counter2 += 1;
    num2.innerHTML = counter2 + "%";
    }
}, 30);

setInterval(() => {
    if(counter3 == 65){
        clearInterval();
    }else{
    counter3 += 1;
    num3.innerHTML = counter3 + "%";
    }
}, 30);

setInterval(() => {
    if(counter4 == 75){
        clearInterval();
    }else{
    counter4 += 1;
    num4.innerHTML = counter4 + "%";
    }
}, 30);

setInterval(() => {
    if(counter5 == 45){
        clearInterval();
    }else{
    counter5 += 1;
    num5.innerHTML = counter5 + "%";
    }
    if(counter6 == 45){
        clearInterval();
    }else{
    counter6 += 1;
    num6.innerHTML = counter6 + "%";
    }
}, 60);