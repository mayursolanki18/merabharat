let ham = document.getElementById("ham");
let menu = document.getElementById("menu");

ham.addEventListener("click", ()=>{
    if (menu.style.top == ""){
        menu.style.top = "80px"
    }else{
        menu.style.top = ""
    }
})