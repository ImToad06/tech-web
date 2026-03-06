// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  console.log("Portafolio personal cargado exitosamente.");
  // Evento: Cambiar color del bg cuando se pasa el cursor por la tabla
  const tableRows = document.querySelectorAll("tbody tr");
  tableRows.forEach((row) => {
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "#e1f5fe";
    });
    row.addEventListener("mouseout", () => {
      row.style.backgroundColor = "";
    });
  });
});
