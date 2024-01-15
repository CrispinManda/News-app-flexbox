document.addEventListener("DOMContentLoaded", () => {
  const ICON_MENU_ELEMENT = document.getElementById("icon-menu");
  const ICON_MENU_CLOSE_ELEMENT = document.getElementById("icon-menu-close");
  const MENU_ELEMENT = document.getElementById("menu");
  const OVERLAY_ELEMENT = document.getElementById("overlay");

  /**
   * Cuando se detecte el evento click sobre el icono del menú
   * entonces mostrar el menú y el overlay detrás.
   */
  ICON_MENU_ELEMENT.addEventListener("click", () => {
    MENU_ELEMENT.classList.remove("d-none");
    OVERLAY_ELEMENT.classList.remove("d-none");
  });

  /**
   * Cuando se detecte el evento click sobre el icono de cerrado
   * entonces ocultar el menú y el overlay detrás.
   */
  ICON_MENU_CLOSE_ELEMENT.addEventListener("click", () => {
    MENU_ELEMENT.classList.add("d-none");
    OVERLAY_ELEMENT.classList.add("d-none");
  });
});
