"use strict";

// $(function () {
//     const today = new Date();
//     const minDate = new Date(
//         today.getFullYear(),
//         today.getMonth(),
//         today.getDate() + 7
//     );

//     $("#datepicker")
//         .datepicker({
//             minDate: minDate,
//             dateFormat: "dd/mm/yy",
//             dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
//             beforeShow: function (input, inst) {
//                 setTimeout(function () {
//                     const inputOffset = $(input).offset();
//                     inst.dpDiv.css({
//                         top: inputOffset.top + $(input).outerHeight(),
//                         left: inputOffset.left,
//                         position: "fixed",
//                     });
//                 }, 0);
//             },
//         })
//         .datepicker("setDate", minDate);
// });

$(function () {
    const today = new Date();
    const minDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 7
    );

    const isMobileDevice = () => {
        return (
            typeof window.orientation !== "undefined" ||
            navigator.userAgent.indexOf("IEMobile") !== -1
        );
    };

    $("#datepicker").on("click", function () {
        if (isMobileDevice()) {
            $(this).datepicker("show");
        }
    });

    $("#datepicker")
        .datepicker({
            minDate: minDate,
            dateFormat: "dd/mm/yy",
            dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            beforeShow: function (input, inst) {
                setTimeout(function () {
                    const inputOffset = $(input).offset();
                    let topPosition = inputOffset.top + $(input).outerHeight();
                    let leftPosition = inputOffset.left;
                    const windowHeight =
                        window.innerHeight ||
                        document.documentElement.clientHeight;
                    const windowWidth =
                        window.innerWidth ||
                        document.documentElement.clientWidth;
                    const calendarHeight = inst.dpDiv.outerHeight();
                    const calendarWidth = inst.dpDiv.outerWidth();

                    if (topPosition + calendarHeight > windowHeight) {
                        topPosition = windowHeight - calendarHeight;
                    }

                    if (leftPosition + calendarWidth > windowWidth) {
                        leftPosition = windowWidth - calendarWidth;
                    }
                    inst.dpDiv.css({
                        top: topPosition,
                        left: leftPosition,
                        position: "fixed",
                    });
                }, 0);
            },
        })
        .datepicker("setDate", minDate);
});

// Dropdown //

function selectOption(option) {
    const dropdownButton = document.getElementById("dropdownMenuButton");
    dropdownButton.innerHTML = option;
}

document
    .getElementById("banner__form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
    });

// Code for tab menu //

// const buttonHome = document.getElementById("tab-home-btn");
// const blockHome = document.getElementById("tab-home-block");

// const buttonMoving = document.getElementById("tab-moving-btn");
// const blockMoving = document.getElementById("tab-moving-block");

// const buttonReviews = document.getElementById("tab-reviews-btn");
// const blockReviews = document.getElementById("tab-reviews-block");

// const buttonCalculator = document.getElementById("tab-calculator-btn");
// const blockCalculator = document.getElementById("tab-calculator-block");

// const buttonAbout = document.getElementById("tab-about-btn");
// const blockAbout = document.getElementById("tab-about-block");

// function setupHoverFunction(buttonElement, blockElement) {
//     let timer;

//     buttonElement.addEventListener("mouseover", function () {
//         clearTimeout(timer);
//         blockElement.style.display = "block";
//     });

//     buttonElement.addEventListener("mouseout", function (event) {
//         const e = event.toElement || event.relatedTarget;
//         if (e && (e === blockElement || blockElement.contains(e))) {
//             return;
//         }
//         timer = setTimeout(function () {
//             blockElement.style.display = "none";
//         }, 500); // Adjust the delay time (in milliseconds) as needed
//     });

//     blockElement.addEventListener("mouseover", function () {
//         clearTimeout(timer);
//     });

//     blockElement.addEventListener("mouseout", function (event) {
//         const e = event.toElement || event.relatedTarget;
//         if (e && (e === buttonElement || buttonElement.contains(e))) {
//             return;
//         }
//         timer = setTimeout(function () {
//             blockElement.style.display = "none";
//         }, 500); // Adjust the delay time (in milliseconds) as needed
//     });
// }

// // Usage example:

// setupHoverFunction(buttonHome, blockHome);
// setupHoverFunction(buttonMoving, blockMoving);
// setupHoverFunction(buttonReviews, blockReviews);
// setupHoverFunction(buttonCalculator, blockCalculator);
// setupHoverFunction(buttonAbout, blockAbout);

// You can call the function again with different elements to achieve the same behavior for other buttons and blocks
//   const buttonAnother = document.getElementById("another-btn");
//   const blockAnother = document.getElementById("another-block");
//   setupHoverFunction(buttonAnother, blockAnother);

const buttonHome = document.getElementById("tab-home-btn");
const blockHome = document.getElementById("tab-home-block");

const buttonMoving = document.getElementById("tab-moving-btn");
const blockMoving = document.getElementById("tab-moving-block");

const buttonReviews = document.getElementById("tab-reviews-btn");
const blockReviews = document.getElementById("tab-reviews-block");

const buttonCalculator = document.getElementById("tab-calculator-btn");
const blockCalculator = document.getElementById("tab-calculator-block");

const buttonAbout = document.getElementById("tab-about-btn");
const blockAbout = document.getElementById("tab-about-block");

const rectangleHome = document.querySelector(".rectangle-home");
const rectangleMoving = document.querySelector(".rectangle-moving-companies");
const rectangleReviews = document.querySelector(".rectangle-reviews");
const rectangleCalculator = document.querySelector(
    ".rectangle-cost-calculator"
);
const rectangleAbout = document.querySelector(".rectangle-about-us");

const buttonBlockPairs = [
    { button: buttonHome, block: blockHome, rectangle: rectangleHome },
    { button: buttonMoving, block: blockMoving, rectangle: rectangleMoving },
    { button: buttonReviews, block: blockReviews, rectangle: rectangleReviews },
    {
        button: buttonCalculator,
        block: blockCalculator,
        rectangle: rectangleCalculator,
    },
    { button: buttonAbout, block: blockAbout, rectangle: rectangleAbout },
];

let activeBlock = null;

function showBlock(buttonElement, blockElement, rectangleElement) {
    if (activeBlock) {
        activeBlock.button.classList.remove("active");
        activeBlock.block.style.display = "none";
        activeBlock.rectangle.classList.remove("active-rectangle");
    }

    buttonElement.classList.add("active");
    blockElement.style.display = "block";
    rectangleElement.classList.add("active-rectangle");
    activeBlock = {
        button: buttonElement,
        block: blockElement,
        rectangle: rectangleElement,
    };
}

function handleMouseOver(buttonElement, blockElement, rectangleElement) {
    if (window.innerWidth >= 992) {
        showBlock(buttonElement, blockElement, rectangleElement);
    }
}

function handleMouseOut(buttonElement, blockElement, rectangleElement) {
    blockElement.addEventListener("mouseleave", function () {
        blockElement.style.display = "none";
        buttonElement.classList.remove("active");
        rectangleElement.classList.remove("active-rectangle");
        activeBlock = null;
    });
}

function enableHoverFunction(pair) {
    if (window.innerWidth >= 992) {
        pair.button.addEventListener("mouseover", function () {
            handleMouseOver(pair.button, pair.block, pair.rectangle);
        });

        pair.button.addEventListener("mouseout", function () {
            handleMouseOut(pair.button, pair.block, pair.rectangle);
        });
    }
}

function disableHoverFunction(pair) {
    pair.button.removeEventListener("mouseover", function () {
        handleMouseOver(pair.button, pair.block, pair.rectangle);
    });

    pair.button.removeEventListener("mouseout", function () {
        handleMouseOut(pair.button, pair.block, pair.rectangle);
    });
}

// Check the window width and bind/unbind event listeners accordingly
function checkWindowWidth() {
    const minWidth = 992; // Set the minimum width here

    if (window.innerWidth >= minWidth) {
        buttonBlockPairs.forEach(enableHoverFunction);
    } else {
        buttonBlockPairs.forEach(disableHoverFunction);
    }
}

// Initial check on page load
checkWindowWidth();

// Check the window width on window resize
window.addEventListener("resize", checkWindowWidth);

// const buttonBlockPairs = [
//     { button: buttonHome, block: blockHome },
//     { button: buttonMoving, block: blockMoving },
//     { button: buttonReviews, block: blockReviews },
//     { button: buttonCalculator, block: blockCalculator },
//     { button: buttonAbout, block: blockAbout },
// ];

// let activeBlock = null;
// let timer;

// function showBlock(blockElement) {
//     clearTimeout(timer);

//     if (activeBlock) {
//         activeBlock.style.display = "none";
//     }

//     blockElement.style.display = "block";
//     activeBlock = blockElement;
// }

// function handleMouseOver(buttonElement, blockElement) {
//     showBlock(blockElement);
// }

// function handleMouseOut(buttonElement, blockElement) {
//     timer = setTimeout(function () {
//         blockElement.style.display = "none";
//         activeBlock = null;
//     }, 800); // Adjust the delay time (in milliseconds) as needed
// }

// // Check the window width before binding the event listeners
// buttonBlockPairs.forEach(function (pair) {
//     const minWidth = 992; // Set the minimum width here for each button-block pair

//     if (window.innerWidth >= minWidth) {
//         pair.button.addEventListener("mouseover", function () {
//             handleMouseOver(pair.button, pair.block);
//         });

//         pair.button.addEventListener("mouseout", function () {
//             handleMouseOut(pair.button, pair.block);
//         });

//         pair.block.addEventListener("mouseover", function () {
//             clearTimeout(timer);
//         });

//         pair.block.addEventListener("mouseout", function () {
//             handleMouseOut(pair.button, pair.block);
//         });
//     }
// });

// // Check the window width on window resize
// window.addEventListener("resize", function () {
//     if (window.innerWidth < 992 && activeBlock) {
//         activeBlock.style.display = "none";
//         activeBlock = null;
//     }
// });

// const buttonBlockPairs = [
//     { button: buttonHome, block: blockHome },
//     { button: buttonMoving, block: blockMoving },
//     { button: buttonReviews, block: blockReviews },
//     { button: buttonCalculator, block: blockCalculator },
//     { button: buttonAbout, block: blockAbout },
// ];

// let activeBlock = null;
// let timer;

// function showBlock(buttonElement, blockElement) {
//     clearTimeout(timer);

//     if (activeBlock) {
//         activeBlock.button.classList.remove("active");
//         activeBlock.block.style.display = "none";
//     }

//     buttonElement.classList.add("active");
//     blockElement.style.display = "block";
//     activeBlock = { button: buttonElement, block: blockElement };
// }

// function handleMouseOver(buttonElement, blockElement) {
//     showBlock(buttonElement, blockElement);
// }

// function handleMouseOut(buttonElement, blockElement) {
//     timer = setTimeout(function () {
//         blockElement.style.display = "none";
//         activeBlock = null;
//     }, 2000); // Adjust the delay time (in milliseconds) as needed
// }

// // Check the window width before binding the event listeners
// buttonBlockPairs.forEach(function (pair) {
//     const minWidth = 992; // Set the minimum width here for each button-block pair

//     if (window.innerWidth >= minWidth) {
//         pair.button.addEventListener("mouseover", function () {
//             handleMouseOver(pair.button, pair.block);
//             pair.button.classList.add("active");
//         });

//         pair.button.addEventListener("mouseout", function () {
//             handleMouseOut(pair.button, pair.block);
//             pair.button.classList.remove("active");
//         });

//         pair.block.addEventListener("mouseover", function () {
//             clearTimeout(timer);
//         });

//         pair.block.addEventListener("mouseout", function () {
//             handleMouseOut(pair.button, pair.block);
//             pair.button.classList.remove("active");
//         });
//     }
// });

// // Check the window width on window resize
// window.addEventListener("resize", function () {
//     if (window.innerWidth < 992 && activeBlock) {
//         activeBlock.block.style.display = "none";
//         activeBlock.button.classList.remove("active");
//         activeBlock = null;
//     }
// });
