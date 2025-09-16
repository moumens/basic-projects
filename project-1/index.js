const body=document.body;

function setcollor(color)
{
    body.style.backgroundColor=color;
}

function random_collor()
{
    let red=Math.round(Math.random()*250)
    let green=Math.round(Math.random()*250)
    let blue=Math.round(Math.random()*250)
    let color=`rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor=color
}