let index = 0;

function showSlide() {

const slides = document.getElementById("slides");

index++;

if(index > 2){
index = 0;
}

slides.style.transform = "translateX(" + (-index * 100) + "%)";

}

setInterval(showSlide,4000);



function nextSlide(){
index++;
if(index>2) index=0;
document.getElementById("slides").style.transform="translateX(" + (-index*100) + "%)";
}
let infoIndex = 0;

const container = document.getElementById("infoContainer");
const slides = document.querySelectorAll(".info-slide");
const totalSlides = slides.length;

function autoSlideInfo(){

infoIndex++;

if(infoIndex >= totalSlides){
infoIndex = 0;
}

container.style.transform = `translateX(-${infoIndex * 100}%)`;
container.style.transition = "transform 0.7s ease";

}

setInterval(autoSlideInfo,4000);

function toggleMenu(){

let menu = document.getElementById("dropdownMenu");

if(menu.style.display === "block"){
menu.style.display = "none";
}
else{
menu.style.display = "block";
}

}
let slideIndex = 0;

function showSlide(){
let slides = document.getElementById("slides");
slides.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
}

function nextSlide(){
slideIndex++;
if(slideIndex > 2){
slideIndex = 0;
}
showSlide();
}

function prevSlide(){
slideIndex--;
if(slideIndex < 0){
slideIndex = 2;
}
showSlide();
}