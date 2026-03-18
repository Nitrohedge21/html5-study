// --- 1. SYNC THE ICON ON LOAD ---
// This runs as soon as this script file is loaded
window.addEventListener('DOMContentLoaded', () => {
    const theme_icon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");

    // Check if the HTML tag has the dark-mode class
    if (document.documentElement.classList.contains("dark-mode")) {
        if (theme_icon) theme_icon.src = "images/white-moon.png";
        if (logo) logo.src = "images/avatar-dark.png";
    }
});

// --- 2. THE TOGGLE FUNCTION ---
function changeTheme() {
    const html = document.documentElement; // Target the HTML tag
    const theme_icon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");

    // Toggle the class on the HTML tag
    html.classList.toggle("dark-mode");

    if (html.classList.contains("dark-mode")) {
        theme_icon.src = "images/white-moon.png";
        logo.src = "images/avatar-dark.png";
        localStorage.setItem("theme", "dark");
    } else {
        theme_icon.src = "images/black-sun.png";
        logo.src = "images/avatar-light.png";
        localStorage.setItem("theme", "light");
    }
}

function openLink(website) {
    
    if (!website)
    {
        window.open("https://google.com", "_blank");
    }
    else
    {
        const fullUrl = "https://" + website;
        window.open(fullUrl, "_blank");
    }
}