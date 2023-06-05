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
