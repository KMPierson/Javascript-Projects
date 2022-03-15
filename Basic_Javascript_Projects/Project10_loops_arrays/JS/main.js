function Call_Loop() {  //This function displays a number.
    var num = "";
    var P = 1;
    while (P < 11) { //This while loop adds one to the number until it gets to 10
        num += "<br>" + P;
        P++;
    }
    document.getElementById("Loop").innerHTML = num;
}

function string_length() { //This function displays how many characters are in the string
    var text= "Hello, World!";
    var length= text.length;
    document.getElementById("string").innerHTML= length;
}

function for_Loop() {
    var instruments= ["Trumpet", "Trombone", "Clarinet", "Flute","Piccolo","Saxophone","Kettle Drum"];
    var content = "";
    var Y;
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_Function() {  //THis function allows you to pick from an array.
    var never= [];
    never[0]= " give you up";
    never[1]=" let you down";
    never[2]=" run around and desert you";
    never[3]=" make you cry";
    document.getElementById("Array").innerHTML = "Rick Astley is never gonna" + 
    never[1] + ".";
}


function constant_function() { //Constant is used to assign a variable that does not change.
    const phone = { brand: "Iphone", version: "8", color: "Pink"};
    phone.color= "white";
    phone.price= "$800";
    document.getElementById("Constant").innerHTML = "The cost of the " + phone.brand + phone.version +
    " was " + phone.price + ".";
}

let P= 15
document.write(P + 5)

