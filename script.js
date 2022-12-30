let btn = document.getElementById("nameBtn")
let mainSec = document.getElementById("first-main")
let secMainSec = document.getElementById("second-main")
let setNme = document.querySelector(".second-container")
let pera = document.getElementById("quates")

btn.addEventListener("click", () => {
    let getName = document.getElementById("name")
    mainSec.style.display = "none"
    secMainSec.style.display = "block"
    setNme.innerHTML = `<div style="margin-left:10%;color:gold;">Dear <h1 style="color:#fff; id="userName">${getName.value}</h1></div>`
    
})

let share =document.getElementById("share");
share.addEventListener('click',()=>{
    alert("hi")
})

// function share() {   
//     // collet the user input   
// //    var message = $("input[name=message]").val();   
//             var message = 'hello'
//             // JavaScript function to open URL in new window   
//             alert("hello") 
//     window.open( "whatsapp://send?text=" + message, '_blank');  
    
// }