// Your code goes here
let funBusImage = document.querySelector(".intro img");
funBusImage.addEventListener("mouseenter", () => {
    funBusImage.style.transform = "scale(1.1)"
    funBusImage.style.transition = "all 0.3s"
});
funBusImage.addEventListener("mouseleave", () => {
    funBusImage.style.transform = "scale(1)"
});

funBusImage.addEventListener("drag", (event) => {
    event.target.style.transform = "scale(0.5)"
}, false);


let colorChange = document.querySelector("body");
colorChange.addEventListener("keydown", (event) => {
    event.target.style.backgroundColor = "yellowgreen";
    event.stopPropagation();
})

let containerChange = document.querySelector(".content-section");
containerChange.addEventListener("keydown", (event) => {
    event.target.style.backgroundColor = "purple";

})

let contentChange = document.querySelector(".content-pick");
contentChange = addEventListener("keydown", (event) => {
    event.target.style.backgroundColor = "blue"

})

let logo = document.querySelector(".logo-heading")
logo.addEventListener('wheel', () => {
    logo.style.color = "red";
});

let highlightedText = document.querySelector(".content-destination h2");
highlightedText.addEventListener("mousedown", (event) => {
    event.target.style.textTransform = "uppercase";
})


let headerColor = document.querySelector(".main-navigation");
window.addEventListener("load", (event) => {
    headerColor.style.backgroundColor = "lightblue";
})

let noImage = document.querySelector(".content-destination img");
window.addEventListener("resize", (event) => {
    noImage.style.display = "none";
});
let footerColor = document.querySelector(".footer p");
window.addEventListener("resize", (event) => {
    footerColor.style.color = "green";
})

let hideScroll = document.querySelector(".intro h2");
window.addEventListener("scroll", (event) => {
    hideScroll.style.color = "pink";
    hideScroll.style.fontSize = "5rem"
})


let buttonsChanged = document.querySelectorAll(".btn");
buttonsChanged.forEach(button => {
    button.addEventListener("dblclick", (event) => {
        event.target.style.backgroundColor = "pink";
    });
    button.addEventListener("auxclick", (event) => {
        event.target.style.backgroundColor = "black";
    });
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "blue"
    })
});

// Task 3



let navStop = document.querySelectorAll("nav");
navStop.forEach(navLink => {
    navLink.addEventListener("click", (event) => {
        event.target.style.textTransform = "uppercase";
    })
    navLink.addEventListener("click", (event) => {
        event.preventDefault();
    })
})


// TESTER
// let buttonTest = document.querySelector(".btn");
// buttonTest.addEventListener("mouseover", () => {
//     buttonTest.style.fontSize = "5rem"
// });