const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".navbar")
const xclose = document.querySelector(".xclose")
const link = document.getElementsByClassName("nav-link")

const openMenu = () =>{
    menu.classList.add("spread")
}

const closeMenu = () =>{
    menu.classList.remove("spread");
}

hamburger.addEventListener("click", () =>{
    openMenu();
})

xclose.addEventListener("click", () =>{
    closeMenu();
})


window.addEventListener("click", (e) =>{
    if (menu.classList.contains("spread") && e.target != menu && e.target != hamburger){
        closeMenu();
    }
})