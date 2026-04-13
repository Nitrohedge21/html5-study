// Run this upon visiting the website
getVisitorName();

// The interval being set to 1000 makes it take off a second each time.
var customTimer = setInterval(websiteTimeout, 1000);

var audio = new Audio();
audio.volume = 0.5; // This is between 0 & 1

function playSound(soundToPlay)
{
    audio.src = soundToPlay;

    // The logic down here seems to be ignored.
    // The sfx is spammable but it just starts it from the beginning
    // instead of adding onto the existing one.
    if(audio.paused)
    {
        audio.play();
    }
    else if (audio.ended)
    {
        audio.remove();
    }
}

function getVisitorName()
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

function testComparison()
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

class Rectangle
{
    static width = 0;
    static height = 0;

    Calculate()
    {
        return (this.width * this.height) / 2;
    }

}

function calculateRatio()
{
    var testx = new Rectangle();

    testx.width = Number(prompt("Width:"));

    testx.height = Number(prompt("Height:"));

    alert("The ratio is " + testx.Calculate());
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

var timerLength = 10;

function websiteTimeout() {
    
    // Increment total time
    timerLength--;

    // Use Modulo (%) 60 to make it "reset" to 0 after 59
    // If you want it to keep counting past 60 (e.g. 61, 62) but stay 2 digits, 
    // just remove the "% 60" part.
    var displaySecs = timerLength;

    //  Force it to be X digits
    var formattedSeconds = String(displaySecs).padStart(3, '0');

    document.getElementById("timer").innerHTML = formattedSeconds;

    if (timerLength <= 0)
    {
        addMoreTime();
        clearInterval(customTimer);
    }
}

function addMoreTime()
{
    var userChoice = prompt("Extend time by 1/5/10 minutes or stop here. (A/B/C/D)");
    userChoice = userChoice.toUpperCase();
   
    switch (userChoice)
    {
        case "A":
            timerLength += 60;
            startTimer();
        break;

        case "B":
            timerLength += 300;
            startTimer();
        break;

        case "C":
            timerLength += 600;
            startTimer();
        break;

        case "D":
            clearInterval(customTimer);
            startTimer();
        break;

        default:
            console.log("Invalid choice selected.");
            addMoreTime();
        break;
    }
}

function startTimer()
{
    customTimer = setInterval(websiteTimeout, 1000);
}