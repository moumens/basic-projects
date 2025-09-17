const input=document.getElementById("input")


function revers_str(str)
{
    return str.split("").reverse().join("")
}
function check(){
    const input_value=input.value
    if (revers_str(input_value)==input_value)
    {
        alert(" yes")
    }else{alert("no")}
}