document.querySelectorAll(".accessSubMenu").forEach((accSubMenu) => {
  console.log(accSubMenu.nextElementSibling);
  accSubMenu.onclick = (event) => {
    accSubMenu.nextElementSibling.classList.toggle("mostrar");
  };
});
