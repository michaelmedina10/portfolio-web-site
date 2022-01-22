var sizeScreen = window.matchMedia("(max-width:750px)");
document.querySelectorAll(".accessSubMenu").forEach((accSubMenu) => {
  accSubMenu.onclick = (event) => {
    accSubMenu.nextElementSibling.classList.toggle("mostrar");
  };
});

function toggle(element, classe) {
  element.classList.toggle(classe);
}

document.querySelectorAll(".btnMenu").forEach((btn) => {
  console.log(btn);
  const leftMenu = document.querySelector(".left");
  btn.onclick = (event) => {
    if (sizeScreen.matches) {
      console.log(sizeScreen.matches);
      console.log("cliquei no link");
      const btn = event.target;
      toggle(leftMenu, "menuActive");
    } else {
      console.log(sizeScreen.matches);
      leftMenu.classList.remove("menuActive");
    }
  };
});

document.querySelectorAll("[ajaxAttrib]").forEach((link) => {
  link.onclick = (event) => {
    event.preventDefault();
    const mainContainer = document.querySelector(".mainContainer");
    fetch(link.getAttribute("href"))
      .then((response) => response.text())
      .then((html) => (mainContainer.innerHTML = html));
  };
});
