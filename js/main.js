document.querySelectorAll(".accessSubMenu").forEach((accSubMenu) => {
  console.log(accSubMenu.nextElementSibling);
  accSubMenu.onclick = (event) => {
    accSubMenu.nextElementSibling.classList.toggle("mostrar");
  };
});

document.querySelectorAll(".btnMenu").forEach((btn) => {
  btn.onclick = (event) => {
    const btn = event.target;
    const leftMenu = document.querySelector(".left");
    console.log(leftMenu);
    leftMenu.classList.toggle("menuActive");
    console.log(leftMenu);
  };
});
