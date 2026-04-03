// Run this upon visitng the website
GetVisitorName();

var audio = new Audio('audio/button-click.mp3');
audio.volume = 0.5; // This is between 0 & 1

function PlaySound()
{
    if(audio.paused)
    {
        audio.play();
    }
    else if (audio.ended)
    {
        audio.remove();
    }
}

function GetVisitorName()
{
    var visitorName = String(prompt("What's your name?"));

    while(!visitorName)
    {
        alert("Please type your name in!");
        visitorName = String(prompt("What's your name?"));
    }

    alert("Your name is " + visitorName + "!");

    var currentUser = document.getElementById("visitor-name");
    currentUser.innerHTML = visitorName;
}

function TestComparison()
{
    var weather = Number(prompt("Weather"));

    if(weather <= 0)
    {
        alert("freezing cold!");
    }

    else if (weather < 15 && weather > 1)
    {
        alert("cold!")
    }

    else if (weather <= 25 && weather > 1)
    {
        alert("warm!");
    }
}