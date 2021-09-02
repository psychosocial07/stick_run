const stick = document.getElementById("stickman");

function jump()
{   
    if(stick.classList !="jump")
    {
        stick.classList.add("jump");
        setTimeout(function()  {
            stick.classList.remove("jump");
        }, 500);
    }
}
document.addEventListener("keydown",function(event)
{
    if(event.keyCode==38)
    {
        jump();
    }
})