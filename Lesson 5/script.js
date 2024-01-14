
// document.getElementById("mytxt").innerHTML = "Arnold Schwartzneger biography";
// document.getElementById("mytxt2").innerHTML = "Arnold Schwartzneger biography";
let var1 = document.getElementById("mytxt2");
var1.innerHTML = "Arnold Schwarzneger";


let btn = document.getElementById("btn");
function changeTxt(){
    btn.innerHTML = "Oooops";
    btn.style.color = "blue";
   
}

document.getElementById("btn").addEventListener("click", changeTxt)