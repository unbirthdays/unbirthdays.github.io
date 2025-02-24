// Phase 1: Hello, World appears and then disappears. Shows human.

document.addEventListener('click', function (event) {
	fadeOutAndRemove();
});

function fadeOutAndRemove() {
  const element = document.getElementById("hello");
  element.remove();
}

function moveOnward() {
    document.querySelector('#hello').click();
}
setTimeout(moveOnward, 4000); // activates transition automatically after 3 seconds

// Phase 2: Human performs mitosis.

setTimeout(function() { // Human fades in
    let element = document.getElementById("mitosis");
    let element1 = document.getElementById("learn");
    element.style.display = 'flex';
    element.style.transition = "opacity 1s"; // Add smooth transition
    element.style.opacity = 1; // Fade in
    element1.style.display = 'block';
    element1.style.transition = "opacity 3s"; // Add smooth transition
    element1.style.opacity = 1;
  }, 6000); 

  setTimeout(function() {
    let element1 = document.getElementById("left-woman");
    let element2 = document.getElementById("right-woman");
    element1.style.margin = 0;
    element2.style.margin = 0;
  }, 8000); 

  // disables user from clicking into women too early

  document.body.classList.add('disable-clicks');

  setTimeout(() => {
    document.body.classList.remove('disable-clicks');
  }, 10000);