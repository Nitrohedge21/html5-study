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