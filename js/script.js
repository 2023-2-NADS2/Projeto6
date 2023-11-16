import DropdownMenu from "./modules/dropdown-menu.js";
import ativaHamburguer from "./modules/hamburguer-menu.js";

const dropdown = new DropdownMenu("[data-dropdown]");
dropdown.init();
ativaHamburguer();

/* Box LGPD */

const cookieBox = document.querySelector(".wrapper"),
  buttons = document.querySelectorAll(".button");

const executeCodes = () => {
  
  if (document.cookie.includes("codinglab")) return;
  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");

      
      if (button.id == "acceptBtn") {
        // set do tempo de cookies
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
};

//adiciona evento ao carregar a pagina
window.addEventListener("load", executeCodes);
