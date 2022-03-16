function tmnt_Function() {
    var char_Output;
    var char= document.getElementById("tmnt_Input").value;
    var char_String = " is a great character!";
    switch(char) {
        case "Michelangelo":
            char_Output = "Michelangelo" + char_String;
        break;
        case "Donatello":
            char_Output = "Donatello" + char_String;
        break;
        case "Raphael":
            char_Output = "Raphael" + char_String;
        break;
        case "Leonardo":
            char_Output = "Leonardo" + char_String;
        break;
        case "Splinter":
            char_Output = "Splinter" + char_String;
        break;
        case "April O'Neil":
            char_Output = "April" + char_String;
        break;
        case "Shredder":
            char_Output = "Shredder" + char_String;
        break;
            default: 
            char_Output = "Please pick a character exactly as written.";
    }
    document.getElementById("Output").innerHTML = char_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillstyle = grd;
ctx.fillRect(20, 20, 150, 100);