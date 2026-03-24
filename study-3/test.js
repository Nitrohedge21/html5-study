var test = String(prompt("What's your name?"));

while(!test)
{
    alert("Please type your name in!");
    test = String(prompt("What's your name?"));
}

alert("Your name is " + test + "!");

var currentUser = document.getElementById("user-name");
currentUser.innerHTML = test;

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