/*
 * Copyright (C) 2016 Igalia, S.L. <info@igalia.com>
 *
 * This file is part of PhpReport.
 *
 * PhpReport is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * PhpReport is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with PhpReport.  If not, see <http://www.gnu.org/licenses/>.
 */

// Dropdown menu control
window.addEventListener("click", function (event) {
    var clickedDropdown;
    var dropdowns = document.getElementsByClassName("dropdown-content");

    if (event.target.matches('.dropdown-button')) {
        // toggle the clicked dropdown
        clickedDropdown = event.target.parentNode.getElementsByClassName("dropdown-content")[0];
        clickedDropdown.classList.toggle("show");
    }
    // hide any dropdowns excepting the clicked one
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i] != clickedDropdown) {
            dropdowns[i].classList.remove('show');
        }
    }
});
