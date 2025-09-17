const time =document.getElementById("time");

let second_passed=0;
let interval=null;

function to_string(value)
{
    return String(value)
}
function second_increasemt(){
    second_passed++;
    update_time();

}

function update_time(){
    const minute=Math.floor(second_passed/60)
    const second=second_passed%60;
    let x=to_string(minute);let y=to_string(second);

    time.textContent=`${x.padStart(2,"0")}:${y.padStart(2,"0")}`
}

function start()
{
    if(interval) stop()
    interval=setInterval(second_increasemt, 1000)

}

function stop(){
    clearInterval(interval)
    
}

function reset(){
    stop()
    second_passed=0
    update_time()
}
