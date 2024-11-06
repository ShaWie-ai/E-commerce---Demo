const navbar = document.querySelector(".navbar");
const offer = document.querySelector(".offer");

const trending1 = document.querySelector(".trending1");
const trending2 = document.querySelector(".trending2");
const trending3 = document.querySelector(".trending3");
const trending4 = document.querySelector(".trending4");
const cart1 = document.getElementById("cart1");
const cart2 = document.getElementById("cart2");
const cart3 = document.getElementById("cart3");
const cart4 = document.getElementById("cart4");

window.addEventListener("scroll", () => {
    if(window.scrollY !== 0) {
        navbar.style.backgroundColor = "black";
        offer.classList.add("scrolled");
    } else {
        navbar.style.backgroundColor = "transparent";
        offer.classList.remove("scrolled");
    }
})

trending1.addEventListener('mouseenter', () => {
    cart1.style.opacity = "1";
    cart1.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending1.addEventListener('mouseleave', () => {
    cart1.style.opacity = "0";
    cart1.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});
trending2.addEventListener('mouseenter', () => {
    cart2.style.opacity = "1";
    cart2.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending2.addEventListener('mouseleave', () => {
    cart2.style.opacity = "0";
    cart2.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});
trending3.addEventListener('mouseenter', () => {
    cart3.style.opacity = "1";
    cart3.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending3.addEventListener('mouseleave', () => {
    cart3.style.opacity = "0";
    cart3.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});
trending4.addEventListener('mouseenter', () => {
    cart4.style.opacity = "1";
    cart4.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending4.addEventListener('mouseleave', () => {
    cart4.style.opacity = "0";
    cart4.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});



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

//Sidebar Links
function sideBarLinksBtn() {
    sideBar.classList.add("remove");
    sideBar.classList.remove("show");
}



