function dictionary() {
    var Pet = {
        Species: "Dog",
        Color: "Brindle",
        Breed: "Mastiff",
        Age: 2,
        Sound: "Snore!",
    }
    delete Pet.Sound  //This element deletes the value, so your output is undefined.
    document.getElementById("dictionary").innerHTML = Pet.Sound;
}