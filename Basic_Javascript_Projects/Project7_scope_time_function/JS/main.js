var x = 10

function add_1() {
    var y = 9
    document.write(x + y);
}

function Subtract() {
    document.write(x - y); //Console says that Y is not defined, because it was defined in a local function, not as a global one.
}

add_1();
Subtract();

function get_date() {
    if (new Date().getHours()>12) {
        document.getElementById("Date").innerHTML = "Good Evening!";
    }
}

function dinner() {
    if (new Date().getHours()==18) {
        document.getElementById("supper").innerHTML= "It's time for dinner!"
    }
}

function age_function() {
    Year = document.getElementById("year").value;
    if (Year<= 2001) {
        Purchase = "You may purchase some wine.";
    }
    else {
        Purchase = "You may purchase sparkling grape juice.";
    }
    document.getElementById("age").innerHTML = Purchase;
}

function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "Good Morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply= "Good Afternoon!";
    }
    else {
        Reply = "Good Evening!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}