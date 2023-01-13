// Making of Cardle
var SlidePosition = 1;
SlideShow(SlidePosition);

// forward/Back controls
function currentSlide(n) {
  SlideShow((SlidePosition += n));
}

// image controls
function currentSlide(n) {
  SlideShow((SlidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("cradle-box");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    SlidePosition = 1;
  }
  if (n < 1) {
    SlidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[SlidePosition - 1].style.display = "block";
  circles[SlidePosition - 1].className += "enable";
}

//  Auto Matic Slide Show
var SlidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("cradle-box");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  SlidePosition++;
  if (SlidePosition > slides.length) {
    SlidePosition = 1;
  }
  slides[SlidePosition - 1].style.display = "block";
  setTimeout(SlideShow, 5000); // Change image every 2 seconds
}

// For Button Function

function showiWriteBox(){
   var tx = document.getElementById("iWriteArea");
   if(tx.style.display ==="none"){
      tx.style.display ="block";
   }else{
      tx.style.display ="none";
   }
}
