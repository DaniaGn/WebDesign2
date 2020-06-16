document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('change');
});

//--------------------SLIDESHOW START--------------
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

//--------------SLIDESHOW END--------------



//Grow the donation box if they type more than 4 numbers
$(".set-amount").keyup(function () {

    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
        this.value = this.value.replace(/[^0-9\.]/g, '');
    }

});



    // $(".donation-box").css("height", "500px");




document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

$('form').submit(function(event){ event.preventDefault(); });