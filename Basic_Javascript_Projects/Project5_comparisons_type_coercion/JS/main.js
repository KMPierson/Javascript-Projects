document.write(typeof "Harry") //This function lets you know what type of value it is.

document.write("25"+ 15) //This is type coercion. Instead of adding the numbers, this tacks one number to the end of the other.

function my_function() {
    document.getElementById("test").innerHTML = 0/0; //This function results in NaN because 0/0 is not a number
}

function function2() {
    document.getElementById("test2").innerHTML = isNaN("Harry Potter"); //This function checks to see if the value is a number.
} //This results in a "true"

function function3() {
    document.getElementById('test3').innerHTML = isNaN("15");
} //This results in a "false"

function function4() {
    document.getElementById("test4").innerHTML= document.write(2e310);
} //this is how you show Infinity

function function5() {
    document.getElementById("test5").innerHTML= document.write(-2e320);
} //This is how you show negative infinity

function function6() {
   document.getElementById("test6").innerHTML = document.write(10>5) //This is Boolean logic that produces a true statement.
}

function function7() {
    document.getElementById("test7").innerHTML = document.write(10<3) //This is Boolean logic that returns a false statement.
}

console.log(25+25)  //This is how you'd display data in the browser's console.
console.log(50<20) //This is how to display FALSE in the console.

function function8() {
    document.getElementById("test8").innerHTML = document.write(5+5 == 8+2) //Double equals checks for equlity. This produces a true
}

function function9() {
    document.getElementById("test9").innerHTML = document.write(5+5 == 8+3) //while this one will produce a false
}
a= 10
b="10"
c="Jim"
d= 10
e= 12

function function10(){
    document.getElementById("test10").innerHTML = document.write(a===d) //This produces a true because both the value and the type of data are the same
}

function function11() {
    document.getElementById("test11").innerHTML = document.write(a===b) //This produces a false because, although the value is the same, a is number data and b is string data
}

function function12() {
    document.getElementById("test12").innerHTML = document.write(a===c) //This is false because neither the type of data or the value of the data are equal
}

function function13() {
     document.getElementById("test13").innerHTML = document.write(d===e)// This is false because 10 and 12 are not equal 
}

function function14() {
    document.getElementById("test14").innerHTML = document.write(5>1 && 8>5) //This uses the Boolean &&
}

function function15() {
    document.getElementById("test15").innerHTML = document.write(5>1 && 8>5); //This creates a false response
}

function function16() {
    document.getElementById("test16").innerHTML = document.write(5>1 || 8<5); //This uses the Boolean OR. It is true because one value is correct.
}

function function17() {
    document.getElementById("test17").innerHTML = document.write(5>10 || 8>18) //This returns a false because neither is true
}

function not_function() {
    document.getElementById("Not").innerHTML = !(20>10);
} //The NOT function checks that thing are not true. This is a false

function not2_function() {
    document.getElementById("Not2").innerHTML = !(20<10);
} //But this is a true