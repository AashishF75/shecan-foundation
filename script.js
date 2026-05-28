const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.innerHTML = "☀️";
    }
    else{
        darkModeBtn.innerHTML = "🌙";
    }

});


// Form Submit

const form = document.getElementById("contactForm");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    successMessage.innerHTML = "Form Submitted Successfully ✅";

    form.reset();

});