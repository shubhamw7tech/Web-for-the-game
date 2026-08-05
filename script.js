const button = document.getElementById("btn")

button.addEventListener("click", function() {
	window.location.href = "https://shubhamw7tech.github.io/2.5d-game/";
})

// 1. Grab the span element
const yesBtn = document.getElementById("yesbtn");
yesBtn.addEventListener("click", function() {
  window.location.href = "index2.html";
});


document.getElementById("copyright-year").textContent = new Date().getFullYear();

//alert("welcome")
//console.log(innerWidth)
//console.log(innerHeight)

const popup = document.getElementById("myPopup");
const closeBtn = document.getElementById("closeBtn");

// 1. A function to show the pop-up
function showPopup() {
  popup.style.display = "flex"; 
}

// 2. Hide the pop-up when the close button is clicked
closeBtn.addEventListener("click", function() {
  popup.style.display = "none";
});

// 3. Trigger the pop-up to show (e.g., as soon as the page loads)
showPopup();
