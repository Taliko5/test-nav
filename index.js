const tabmenu = () => {
    "use strict";
    const navIcon = document.querySelector("#nav-icon");

    navIcon.addEventListener("click", () => {

        navIcon.classList.toggle("open");

    });
};
tabmenu();