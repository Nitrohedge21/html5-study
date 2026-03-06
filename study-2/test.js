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

function changeTheme()
{
    console.log('The theme has been changed!!!!')
    const body = document.body;
    const icon = document.getElementById("theme-icon");

    // 1. Toggle the background theme class
    body.classList.toggle("dark-mode");

    // 2. Check if we are now in dark mode
    if (body.classList.contains("dark-mode")) {
        // If it IS dark mode, show the moon
        icon.src = "images/white-moon.png";
       // alert('HIIII, I CHANGED YOUR THEME');
    } else {
        // If it IS NOT dark mode, show the sun
        icon.src = "images/black-sun.png";
    }

}