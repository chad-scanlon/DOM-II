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


// let dragged = document.querySelector(".text-content h2");
// dragged.addEventListener("drag", (event) => {
// event.target
// }, false);
// document.addEventListener("dragstart", (event) => {
//     dragged = event.target;
//     event.target.style.opacity = ".5"
// }, false);
// document.addEventListener("dragend", (event) => {
//     dragged = event.target;
//     event.target.style.opacity = "";
// }, false);
// document.addEventListener("dragover", (event) => {
//     event.preventDefault();
// }, false);
// document.addEventListener("dragenter", (event) => {
//     // highlight potential drop target when the draggable element enters it
//     if (event.target.className == ".content-section") {
//         event.target.style.background = "purple";
//     }
// }, false);

// document.addEventListener("dragleave", function(event) {
//     // reset background of potential drop target when the draggable element leaves it
//     if (event.target.className == ".content-section") {
//         event.target.style.background = "";
//     }
// }, false);
// document.addEventListener("drop", (event) => {
//     // prevent default action (open as link for some elements)
//     event.preventDefault();
//     // move dragged elem to the selected drop target
//     if (event.target.className == ".content-section") {
//         event.target.style.background = "";
//         dragged.parentNode.removeChild(dragged);
//         event.target.appendChild(dragged);
//     }
// }, false);

// TESTER
// let buttonTest = document.querySelector(".btn");
// buttonTest.addEventListener("mouseover", () => {
//     buttonTest.style.fontSize = "5rem"
// });