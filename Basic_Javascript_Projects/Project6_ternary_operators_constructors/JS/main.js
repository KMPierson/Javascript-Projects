function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote; //These are your variables
    Age = document.getElementById("Age").value; // For the age variable, the program calls the value entered into the input by the user
    Can_vote = (Age < 18) ? "You're too young" : "You're ready"; //The Can_vote variable is determined by the age variable and decides if its true or not
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!"; //This returns the result back to the webpage for users to see.
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color +
    "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Candy(Brand, Flavor, Calories, Price) { //The this function is assigning variables to the states of the Cnady class
    this.Candy_Brand = Brand;
    this.Candy_Flavor = Flavor;
    this.Candy_Calories = Calories;
    this.Candy_Price= Price;
}

var Mike = new Candy("Mars","Chocolate", 150, "$2.00"); // The new function is giving the states of additional objects in the candy class
var Shaina = new Candy("Wonka", "Strawberry", 205, "$1.50");
var Aleah = new Candy("Haribo", "Fruit", 100, "$0.85");
function candyFunction() {
    document.getElementById("New_and_This").innerHTML = "Shaina bought candy from " + Shaina.Candy_Brand + " that tasted like "
    + Shaina.Candy_Flavor + " with " + Shaina.Candy_Calories + " calories and cost " + Shaina.Candy_Price; //This function is pulling all the data about this particular object
}

function Person(First, Last, Age, Eyecolor) {
    this.FirstName = First;
    this.LastName = Last;
    this.Age = Age;
    this.Eyes = Eyecolor;
}

var Tara = new Person("Tara", "Tart", 15, "Green") //When I use the var Tara, this works, but if I change it to true, it does not work at all. 

function PersonFunction() {
    document.getElementById("NewKid").innerHTML = Tara.FirstName + Tara.LastName + " has " + Tara.Eyes + " eyes and is " 
    + Tara.Age + " years old."
}

function count_function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var start = 9;
        function plus_one() {start += 1;}
        plus_one();
        return start;
    }
}

