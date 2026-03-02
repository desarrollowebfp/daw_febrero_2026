const fs = require("fs");

const INPUT_CSV = "videogames.csv";
const OUTPUT_DIR = "export";
const OUTPUT_JSON = `${OUTPUT_DIR}/${INPUT_CSV.split(".")[0]}.json`;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`Carpeta "${OUTPUT_DIR} creada."`);
}

let texto = fs.readFileSync(INPUT_CSV, "utf-8");
texto = texto.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

const lineas = texto.split("\n").filter((linea) => linea.trim() !== "");
console.log("Lineas totales:", lineas.length);

const cabeceras = lineas[0].split(",").map((cabecera) => cabecera.trim());
console.log("Cabeceras totales:", cabeceras.length);

const objetos = [];

for (let i = 1; i < lineas.length; i++) {
  const fila = lineas[i];
  const columnas = fila.split(",");
  const objeto = {};
  for (let j = 0; j < cabeceras.length; j++) {
    objeto[cabeceras[j]] = (columnas[j] || "").trim();
  }
  objetos.push(objeto);
}

console.log("Total de objetos creados:", objetos.length);

fs.writeFileSync(OUTPUT_JSON, JSON.stringify(objetos, null, 2), "utf-8");
console.log(`Fichero JSON exportado en: ${OUTPUT_JSON}`);
