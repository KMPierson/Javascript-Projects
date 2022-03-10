function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2=" + addition;
} //This is how you get Javascript to add for you

function subtract_function() {
    var subtraction = 5-2;
    document.getElementById("sub").innerHTML = "5 - 2= " + subtraction;
} //This is how you get JS to subtract for you

function multiplication() {
    var simple_math = 6 * 8;
    document.getElementById("multiply").innerHTML = "6 x 8 =" + simple_math;
} //This calls the multiplication function

function division() {
    var math = 48 / 6;
    document.getElementById("divide").innerHTML = "48 / 6 =" + math;
}  //And this is division

function allthemath() {
    var allofit= (1+2) * 10 / 2 - 5;
    document.getElementById("combo").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + allofit;
}  //This is how you can combine all the action

function modulus() {
    var remain = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + remain;
}  //This finds the remainder when the sum is not a whole number.

function negation_operator() {
    var x = 10;
    document.getElementById("negate").innerHTML = -x;
}  //This makes your positive integer, negative.

var x = 5;
x++;  //Use this to increase your integer by 1

var y = 4;
y--;  //Use this to decrease it by one


window.alert(Math.random() *100); //This finds a random number between 0 and 100, perfect for deciding which kid gets to play animal crossing first.

var m= Math.PI; //Math allows you to perform mathematical tasks, like displaying Pi.
