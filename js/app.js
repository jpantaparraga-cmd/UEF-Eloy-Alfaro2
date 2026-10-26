
document.addEventListener("DOMContentLoaded", () => {

  // MENÚ RESPONSIVE
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const abierto = menu.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(abierto));
      menuButton.setAttribute(
        "aria-label",
        abierto ? "Cerrar menú" : "Abrir menú"
      );
      menuButton.textContent = abierto ? "×" : "☰";
    });

    menu.querySelectorAll("a").forEach(enlace => {
      enlace.addEventListener("click", () => {
        menu.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
        menuButton.textContent = "☰";
      });
    });
  }

  // AÑO AUTOMÁTICO
  document.querySelectorAll(".current-year").forEach(elemento => {
    elemento.textContent = new Date().getFullYear();
  });

  // VALIDACIÓN DEL FORMULARIO
  const formulario = document.querySelector("#contact-form");

  if (formulario) {
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();

      const estado = document.querySelector("#form-status");

      if (!formulario.reportValidity()) {
        estado.textContent = "Revisa los campos obligatorios.";
        return;
      }

      estado.textContent =
        "Los datos son válidos. Este formulario todavía no envía mensajes.";

      formulario.reset();
    });
  }

});
