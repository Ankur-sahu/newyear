let btn = document.getElementById("nameBtn")
let mainSec = document.getElementById("first-main")
let secMainSec = document.getElementById("second-main")
let setNme = document.querySelector(".second-container")
let pera = document.getElementById("quates")

btn.addEventListener("click", () => {
    let getName = document.getElementById("name")
    let name = getName.value.trim();
    if (name == ""){
        name = 'Developer'
    }
    mainSec.style.display = "none"
    secMainSec.style.display = "block"
    setNme.innerHTML = `<div style="margin-left:10%;color:gold;">Dear <h1 style="color:#fff; id="userName">${name}</h1></div>`
    
})




const button = document.getElementById('share-button');

button.addEventListener('click', () => {
       window.open('https://api.whatsapp.com/send?text=https://squad8newyear2023.netlify.app');
});

