/*
    Student's Name: Daniel Pena Arias
    File name: Script.js
Date: 09/28/2026
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var button = document.querySelector(".menu-icon");
    var open = button.getAttribute("aria-expanded") !== "true";
    menu.style.display = open ? "block" : "none";
    button.setAttribute("aria-expanded", String(open));
}
var mobileQuery = window.matchMedia("(max-width: 629px)");
mobileQuery.addEventListener("change", function () {
    document.getElementById("menu-links").style.display = "none";
    document.querySelector(".menu-icon").setAttribute("aria-expanded", "false");
});
document.addEventListener("keydown", function (event) {
    var button = document.querySelector(".menu-icon");
    if (event.key === "Escape" && mobileQuery.matches && button.getAttribute("aria-expanded") === "true") {
        hamburger();
        button.focus();
    }
});

//Function to display the burpees example video
function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the plank example video
function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

//Function to display the mountain climbers example video
function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.load();
}
var demoForm = document.getElementById("demo-form");
if (demoForm) {
    demoForm.addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("form-status").textContent = "Demo complete. Your entries were not sent or saved.";
    });
    document.getElementById("submit").disabled = false;
}
