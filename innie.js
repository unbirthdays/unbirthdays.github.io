document.getElementById('globe').setAttribute('draggable', false);

// Get the modal
var linkmodal = document.getElementById("linkmodal");
var techmodal = document.getElementById("techmodal");
var projectmodal = document.getElementById("projectmodal");
var certmodal = document.getElementById("certmodal");

// Get the button that opens the modal
var linkbtn = document.getElementById("linkbtn");
var techbtn = document.getElementById("techbtn");
var projectbtn = document.getElementById("projectbtn");
var certbtn = document.getElementById("certbtn");

// Get the <span> element that closes the modal
var linkclose = document.getElementById("linkclose");
var techclose = document.getElementById("techclose");
var projectclose = document.getElementById("projectclose");
var certclose = document.getElementById("certclose");

// When the user clicks on the button, open the modal
linkbtn.onclick = function() {
  linkmodal.style.display = "block";
}
techbtn.onclick = function() {
  techmodal.style.display = "block";
}
projectbtn.onclick = function() {
  projectmodal.style.display = "block";
}
certbtn.onclick = function() {
  certmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
linkclose.onclick = function() {
  linkmodal.style.display = "none";
}
techclose.onclick = function() {
    techmodal.style.display = "none";
}
projectclose.onclick = function() {
    projectmodal.style.display = "none";
}
certclose.onclick = function() {
    certmodal.style.display = "none";
  }

window.onclick = function(event) {
  if (event.target == modal) {
    linkmodal.style.display = "none";
    techmodal.style.display = "none";
    projectmodal.style.display = "none";
    certmodal.style.display = "none";
  }
}
