"use strict";

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    const elements = document.querySelectorAll(
        ".rectangle-home, .rectangle-moving-companies, .rectangle-reviews, .rectangle-cost-calculator, .rectangle-about-us"
    );
    elements.forEach(function (element) {
        element.style.top = "174%";
    });
}

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

const wrapperTabsMenu = document.querySelector(".wrapper-tabs-menu");

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
        wrapperTabsMenu.classList.remove("expanded-tabs-menu");
        wrapperTabsMenu.classList.add("collapsed-tabs-menu");
        activeBlock.button.classList.remove("active");
        activeBlock.button.classList.remove("open");
        activeBlock.block.style.display = "none";
        activeBlock.rectangle.classList.remove("active-rectangle");
    }
    wrapperTabsMenu.classList.add("expanded-tabs-menu");
    wrapperTabsMenu.classList.remove("collapsed-tabs-menu");
    buttonElement.classList.add("active");
    blockElement.style.display = "block";
    blockElement.classList.add("open");
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
        wrapperTabsMenu.classList.remove("expanded-tabs-menu");
        wrapperTabsMenu.classList.add("collapsed-tabs-menu");
        blockElement.classList.remove("open");
        buttonElement.classList.remove("active");
        rectangleElement.classList.remove("active-rectangle");
        blockElement.style.display = "none";
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

function checkWindowWidth() {
    const minWidth = 992;

    if (window.innerWidth >= minWidth) {
        buttonBlockPairs.forEach(enableHoverFunction);
    } else {
        buttonBlockPairs.forEach(disableHoverFunction);
    }
}

checkWindowWidth();

window.addEventListener("resize", checkWindowWidth);

///////

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

// const rectangleHome = document.querySelector(".rectangle-home");
// const rectangleMoving = document.querySelector(".rectangle-moving-companies");
// const rectangleReviews = document.querySelector(".rectangle-reviews");
// const rectangleCalculator = document.querySelector(
//     ".rectangle-cost-calculator"
// );
// const rectangleAbout = document.querySelector(".rectangle-about-us");

// const buttonBlockPairs = [
//     { button: buttonHome, block: blockHome, rectangle: rectangleHome },
//     { button: buttonMoving, block: blockMoving, rectangle: rectangleMoving },
//     { button: buttonReviews, block: blockReviews, rectangle: rectangleReviews },
//     {
//         button: buttonCalculator,
//         block: blockCalculator,
//         rectangle: rectangleCalculator,
//     },
//     { button: buttonAbout, block: blockAbout, rectangle: rectangleAbout },
// ];

// let activeBlock = null;

// function showBlock(buttonElement, blockElement, rectangleElement) {
//     if (activeBlock) {
//         activeBlock.button.classList.remove("active");
//         activeBlock.button.classList.remove("open");

//         activeBlock.block.style.display = "none";
//         activeBlock.rectangle.classList.remove("active-rectangle");
//     }

//     buttonElement.classList.add("active");
//     blockElement.style.display = "block";
//     blockElement.classList.add("open");
//     rectangleElement.classList.add("active-rectangle");
//     activeBlock = {
//         button: buttonElement,
//         block: blockElement,
//         rectangle: rectangleElement,
//     };
// }

// function handleMouseOver(buttonElement, blockElement, rectangleElement) {
//     if (window.innerWidth >= 992) {
//         showBlock(buttonElement, blockElement, rectangleElement);
//     }
// }

// function handleMouseOut(buttonElement, blockElement, rectangleElement) {
//     blockElement.addEventListener("mouseleave", function () {
//         blockElement.classList.add("close");
//         blockElement.classList.remove("open");
//         buttonElement.classList.remove("active");
//         rectangleElement.classList.remove("active-rectangle");
//         blockElement.style.display = "none";
//         activeBlock = null;
//     });
// }

// function enableHoverFunction(pair) {
//     if (window.innerWidth >= 992) {
//         pair.button.addEventListener("mouseover", function () {
//             handleMouseOver(pair.button, pair.block, pair.rectangle);
//         });

//         pair.button.addEventListener("mouseout", function () {
//             handleMouseOut(pair.button, pair.block, pair.rectangle);
//         });
//     }
// }

// function disableHoverFunction(pair) {
//     pair.button.removeEventListener("mouseover", function () {
//         handleMouseOver(pair.button, pair.block, pair.rectangle);
//     });

//     pair.button.removeEventListener("mouseout", function () {
//         handleMouseOut(pair.button, pair.block, pair.rectangle);
//     });
// }

// function checkWindowWidth() {
//     const minWidth = 992;

//     if (window.innerWidth >= minWidth) {
//         buttonBlockPairs.forEach(enableHoverFunction);
//     } else {
//         buttonBlockPairs.forEach(disableHoverFunction);
//     }
// }

// checkWindowWidth();

// window.addEventListener("resize", checkWindowWidth);
