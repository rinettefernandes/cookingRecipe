
var img = document.getElementById('img');
var slides = ['../images/cooking 2.jpg', '../images/ooking3.jpg', '../images/cooking1.jpg'];
var currentSlide = 0;

function showSlide() {
    img.style.opacity = 0;

    setTimeout(function() {
        img.src = slides[currentSlide];
        img.style.opacity = 1;
        currentSlide = (currentSlide + 1) % slides.length;
    }, 1000);
}

setInterval(showSlide,1000); 
