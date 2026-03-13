// --- 1. SYNC THE ICON ON LOAD ---
// This runs as soon as this script file is loaded
window.addEventListener('DOMContentLoaded', () => {
    const icon = document.getElementById("theme-icon");
    // Check if the HTML tag has the dark-mode class
    if (document.documentElement.classList.contains("dark-mode")) {
        if (icon) icon.src = "images/white-moon.png";
    }
});

// --- 2. THE TOGGLE FUNCTION ---
function changeTheme() {
    const html = document.documentElement; // Target the HTML tag
    const icon = document.getElementById("theme-icon");

    // Toggle the class on the HTML tag
    html.classList.toggle("dark-mode");

    if (html.classList.contains("dark-mode")) {
        icon.src = "images/white-moon.png";
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "images/black-sun.png";
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