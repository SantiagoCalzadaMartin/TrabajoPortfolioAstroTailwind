document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("transition-container");

  // Clases de animación para entrada
  container.classList.add("opacity-0", "translate-y-4");
  setTimeout(() => {
    container.classList.add("transition", "duration-500", "ease-in-out");
    container.classList.remove("opacity-0", "translate-y-4");
    container.classList.add("opacity-100", "translate-y-0");
  }, 10);

  // Clases de animación para salida antes de navegar
  const links = document.querySelectorAll("a[href^='/']");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = link.href;
      container.classList.remove("opacity-100", "translate-y-0");
      container.classList.add("opacity-0", "-translate-y-4");
      setTimeout(() => {
        window.location.href = url;
      }, 500); // Duración de la animación
    });
  });
});
