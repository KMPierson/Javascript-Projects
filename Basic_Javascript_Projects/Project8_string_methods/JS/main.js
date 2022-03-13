function full_sentence() {
    var part_1= "A little lamb ";
    var part_2= "whose fleece was ";
    var part_3= "white ";
    var part_4= "as snow.";
    var whole_reply = part_1.concat(part_2, part_3, part_4);
    document.getElementById("mary").innerHTML = whole_reply;
}

function slice_method() {
    var sent = "All work and no play makes Johnny a dull boy.";
    var sect = sent.slice(27,33);
    document.getElementById("slice").innerHTML = sect;
}

function upcase() {
    var text= "hello!";
    var result= text.toUpperCase();
    document.getElementById("upper").innerHTML= result;
}

function green() {
    var text= "Mr. Blue lives in a blue house.";
    var position= text.search("blue");
    document.getElementById('where').innerHTML = position;
}

function string_method() {
    var F =150;
    document.getElementById("number_to_string").innerHTML = F.toString();
}

function precision_Method() {
    var X = 12935.156648568464;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_method() {
    let num = 5.526847;
    let n= num.toFixed();
    document.getElementById("fixed").innerHTML = n;
}

function value_method() {
    let text= "Here I am";
    let result= text.valueOf();
    document.getElementById("Value").innerHTML= result;
}

