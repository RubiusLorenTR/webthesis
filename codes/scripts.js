
/*log in modal*/
function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}   
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

/* Set the current year in the footer */
document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

