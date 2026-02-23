const readline = require("readline");

//Crear la interfaz que le pide los datos por consola al jugador
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stout,
});

//Generamos un numero aleatorio entre el 1 y el 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

//Creamos un contador de intentos
let intentos = 0;

//Saludamos al usuario
console.log("Adivina un número del 1 al 100...")

const preguntar = () => {
  rl.question("Introduce un número", (respuesta) => {
    const numeroUsuario = parseInt(respuesta);
    //Comprobamos que el numero del usuario es un numero valido
    if (isNaN(numeroUsuario)) {
      console.log("Por favor, introduce un numero válido");
      preguntar();
      return;
    }

    //Contamos un nuevo intento
    intentos++;

    if (numeroUsuario < numeroSecreto) {
      console.log("El numero es más alto");
      preguntar();
    } else if (numeroUsuario > numeroSecreto) {
      console.log("El numero es más bajo");
      preguntar();
    } else {
      console.log("¡Has acertado!");
      console.log(`Te ha costado ${intentos} intentos en acertarlo`);
      rl.close();
    }
  });
};

preguntar()