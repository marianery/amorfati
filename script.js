$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  wrapAround: true,
  draggable: true,
  watchCSS: true
});
var myDiv = document.getElementById("text");

function topFunction(){
	myDiv.scrollTop = 0;
}

function openThanks(){
document.getElementById("thankyoupage").style.display = "block";
myDiv.scrollTop = 0;
}

function closeThanks(){
document.getElementById("thankyoupage").style.display = "none";
}

function openWeb(){
document.getElementById("text").style.transform = "translate(0%, 0%)";
document.getElementById("text").style.transition = "transform 200ms ease-out";
}
function closeWeb(){
document.getElementById("text").style.transform = "translate(-100%, 0%)";
document.getElementById("text").style.transition = "transform 200ms ease-out";
}
function closeMobile(){
document.getElementById("text").style.transform = "translate(0%, -200%)";
document.getElementById("text").style.transition = "transform 200ms ease-out";
}
