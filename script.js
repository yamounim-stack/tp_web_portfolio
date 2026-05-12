console.log(" lescript js est chargé");
const button = document.getElementById("myButton");
const message = document.getElementById("message");
button.addEventListener("click", function() {
    message.textContent = "Vous avez cliqué sur le bouton!";
});