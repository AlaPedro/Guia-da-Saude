let show =true;

const menuSection = document.querySelector(".menu-section")
const mennuToggle = menuSection.querySelector(".menu-toggle")

mennuToggle.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})