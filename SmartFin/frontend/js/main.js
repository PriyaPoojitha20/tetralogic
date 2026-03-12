/* =========================
   SmartFin Main JavaScript
   ========================= */

console.log("SmartFin Application Started");

/* -------------------------
   Load Components
------------------------- */

function loadComponent(id, filePath){
    fetch(filePath)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;
    })
    .catch(error => console.log("Component load error:", error));
}

/* Load navbar, sidebar, footer automatically */

document.addEventListener("DOMContentLoaded", function(){

    if(document.getElementById("navbar")){
        loadComponent("navbar", "../components/navbar.html");
    }

    if(document.getElementById("sidebar")){
        loadComponent("sidebar", "../components/sidebar.html");
    }

    if(document.getElementById("footer")){
        loadComponent("footer", "../components/footer.html");
    }

});


/* -------------------------
   Local Storage Functions
------------------------- */

function saveData(key, data){
    localStorage.setItem(key, JSON.stringify(data));
}

function getData(key){
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

function clearData(key){
    localStorage.removeItem(key);
}


/* -------------------------
   Login System (Simple)
------------------------- */

function loginUser(event){

    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email && password){

        localStorage.setItem("userLoggedIn", "true");

        alert("Login Successful");

        window.location.href = "dashboard.html";

    }else{

        alert("Please enter email and password");

    }

}


/* -------------------------
   Logout
------------------------- */

function logout(){

    localStorage.removeItem("userLoggedIn");

    window.location.href = "login.html";

}


/* -------------------------
   Authentication Check
------------------------- */

function checkLogin(){

    let loggedIn = localStorage.getItem("userLoggedIn");

    if(!loggedIn){

        window.location.href = "login.html";

    }

}


/* -------------------------
   Utility Message
------------------------- */

function showMessage(message){

    alert(message);

}


/* -------------------------
   Currency Formatter
------------------------- */

function formatCurrency(amount){

    return "₹" + Number(amount).toLocaleString("en-IN");

}


/* -------------------------
   Date Utility
------------------------- */

function getTodayDate(){

    let today = new Date();

    return today.toISOString().split("T")[0];

}