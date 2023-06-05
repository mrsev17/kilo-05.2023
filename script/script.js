"use strict";

$(function () {
    const today = new Date();
    const minDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 7
    );

    $("#datepicker")
        .datepicker({
            minDate: minDate,
            dateFormat: "dd/mm/yy",
            dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            beforeShow: function (input, inst) {
                setTimeout(function () {
                    const inputOffset = $(input).offset();
                    inst.dpDiv.css({
                        top: inputOffset.top + $(input).outerHeight(),
                        left: inputOffset.left,
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
