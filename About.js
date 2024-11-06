const navbar = document.querySelector(".navbar");
const offer = document.querySelector(".offer");



window.addEventListener("scroll", () => {
    if(window.scrollY !== 0) {
        navbar.style.backgroundColor = "black";
        offer.classList.add("scrolled");
    } else {
        navbar.style.backgroundColor = "transparent";
        offer.classList.remove("scrolled");
    }
})






//SideBar functions
const sideBar = document.querySelector(".sideBar");

function menuBarBtn() {
    sideBar.classList.add("show");
    sideBar.classList.remove("remove");
}

function sideBarBtn() {
    sideBar.classList.add("remove");
    sideBar.classList.remove("show");
}

function sideBarLinksBtn() {
    sideBar.classList.add("remove");
    sideBar.classList.remove("show");
}