const fs = require("fs");

/* const nuevaTarea = "Estudiar lenguaje de marcas\n";

fs.appendFile("tareas.txt", nuevaTarea, (error) => {
  if (error) {
    console.log("Error creando tareas", error.message);
    return;
  }
  console.log("Archivo de tareas creado correctamente");
}); */

fs.readFile("tareas.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error leyendo el fichero", error.message);
    return;
  }

  console.log("Lista de tareas:");
  console.log(data);
});
