const navbar = document.querySelector(".navbar");
const offer = document.querySelector(".offer");

const trending1 = document.querySelector(".trending1");
const trending2 = document.querySelector(".trending2");
const trending3 = document.querySelector(".trending3");
const trending4 = document.querySelector(".trending4");
const trending5 = document.querySelector(".trending5");
const trending6 = document.querySelector(".trending6");
const trending7 = document.querySelector(".trending7");
const trending8 = document.querySelector(".trending8");
const trending9 = document.querySelector(".trending9");
const cart1 = document.getElementById("cart1");
const cart2 = document.getElementById("cart2");
const cart3 = document.getElementById("cart3");
const cart4 = document.getElementById("cart4");
const cart5 = document.getElementById("cart5");
const cart6 = document.getElementById("cart6");
const cart7 = document.getElementById("cart7");
const cart8 = document.getElementById("cart8");
const cart9 = document.getElementById("cart9");

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
trending5.addEventListener('mouseenter', () => {
    cart5.style.opacity = "1";
    cart5.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending5.addEventListener('mouseleave', () => {
    cart5.style.opacity = "0";
    cart5.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});
trending6.addEventListener('mouseenter', () => {
    cart6.style.opacity = "1";
    cart6.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending6.addEventListener('mouseleave', () => {
    cart6.style.opacity = "0";
    cart6.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});
trending7.addEventListener('mouseenter', () => {
    cart7.style.opacity = "1";
    cart7.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending7.addEventListener('mouseleave', () => {
    cart7.style.opacity = "0";
    cart7.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});
trending8.addEventListener('mouseenter', () => {
    cart8.style.opacity = "1";
    cart8.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending8.addEventListener('mouseleave', () => {
    cart8.style.opacity = "0";
    cart8.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});
trending9.addEventListener('mouseenter', () => {
    cart9.style.opacity = "1";
    cart9.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

trending9.addEventListener('mouseleave', () => {
    cart9.style.opacity = "0";
    cart9.style.transition = "opacity .3s ease, background-color .3s ease, color .3s ease";
});

//checkout Container
const closeCheckout = document.getElementById("close-checkout");
const checkOut = document.querySelector(".checkOut");
closeCheckout.addEventListener('click', function() {
    checkOut.style.display = "none";
})

const addToCart = document.querySelectorAll(".addToCart")
addToCart.forEach(function(button) {
    button.addEventListener('click', function() {
        checkOut.style.display = "block";
    })
})

const infoName = document.querySelector(".infoName");
const number = document.getElementById("number");
const address = document.getElementById("address");
const card = document.querySelector(".card");
const day = document.querySelector(".day");
const year = document.querySelector(".year");
const buyBtn = document.querySelector(".buyBtn");
const errorCheckout = document.getElementById("errorCheckout");

buyBtn.addEventListener('click', function() {
    if(
        infoName.value === "" || 
        number.value === "" || 
        address.value === "" || 
        card.value === "" || 
        day.value === "" || 
        year.value === "") {
            errorCheckout.style.display = "flex";
            errorCheckout.textContent = "Please fill out the form!";
    } else {
        setTimeout(function() {
            infoName.value = "";
            number.value = "";
            address.value = "";
            card.value = "";
            day.value = "";
            year.value = "";
        }, 1000);
    }
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

function homeBTn() {
    sideBar.classList.add("remove");
    sideBar.classList.remove("show");
}



