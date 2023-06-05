"use strict";

// Datepicker //

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
        })
        .datepicker("setDate", minDate);
});

// Dropdown //

function selectOption(option) {
    const dropdownButton = document.getElementById("dropdownMenuButton");
    dropdownButton.innerHTML = option;
}
