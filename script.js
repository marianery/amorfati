/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "45%";
  document.getElementById("mySidenav").style.borderRight = "1px solid rgba(0,0,0,0.5)";

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.border = "0px solid";
  document.getElementById("myText").style.width = "70%";
  modal.style.display = "none";
}

function mobilecloseNav() {
  document.getElementById("mySidenav").style.height = "0";
  modal.style.display = "none";
}
function mobileopenNav() {
  document.getElementById("mySidenav").style.height = "100%";
}
   $('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  wrapAround: true,
  draggable: true,
  watchCSS: true
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
