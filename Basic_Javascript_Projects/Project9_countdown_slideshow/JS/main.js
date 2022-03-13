function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        TimeRanges.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            TimeRanges.innerHTML = "";
        }
    }
    tick();
}

var slideIndex = 1;
showSlides(slideIndex);

//next previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", " ");
    }    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}