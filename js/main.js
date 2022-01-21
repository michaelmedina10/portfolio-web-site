console.log(window.location);

document.querySelectorAll(".accessSubMenu").forEach((accSubMenu) => {
  console.log(accSubMenu.nextElementSibling);
  accSubMenu.onclick = (event) => {
    accSubMenu.nextElementSibling.classList.toggle("mostrar");
  };
});

function toggle(element, classe) {
  element.classList.toggle(classe);
}

document.querySelectorAll(".btnMenu").forEach((btn) => {
  btn.onclick = (event) => {
    const btn = event.target;
    const leftMenu = document.querySelector(".left");
    toggle(leftMenu, "menuActive");
  };
});

document.querySelectorAll("[ajaxAttrib]").forEach((link) => {
  console.log(link);
  link.onclick = (event) => {
    event.preventDefault();
    const mainContainer = document.querySelector(".mainContainer");
    fetch(link.getAttribute("href"))
      .then((response) => response.text())
      .then((html) => (mainContainer.innerHTML = html));
  };
});
