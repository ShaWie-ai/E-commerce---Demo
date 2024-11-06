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

const input = document.querySelectorAll(".input");
const inputNumber = document.getElementById("inputNumber");
function resetPage() {
    const allFilled = Array.from(input).every((e) => e.value !== "");
    if(allFilled) {
        setTimeout(function() {
            location.reload();
        }, 1000)
    } else {
        alert("Please Fill Up The Form!");
    }

    if(inputNumber.value !== Number) {
        console.error("Invalid Number");
    }
}

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