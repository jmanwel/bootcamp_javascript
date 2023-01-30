/*
Ejercicio 1
 *Crear una función que acepte un número como argumento y devuelva una promesa que resuelva 
 con el doble del número después de 2 segundos.
 Si introduce un número impar, la promesa debe rechazarse con un error que diga "El número es impar".
 Al cumplirse la promesa, mostrar el resultado en la consola, después sumarle 10 y mostrar el resultado por la consola 
 y después sumarle 20 y mostrar el resultado por la consola.
 *Ver si puedes transformarlo a async/await.
 */

async function validaPar(a) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a %2 === 0) {
          resolve(a * 2);
        } else {
          reject(new Error('El número es impar'));
        }
      }, 2000);
    });
  }

// validaPar(4)
//   .then((r) => {
//       console.log(r);
//       return r;
//   })
//   .then((r) =>{
//     console.log(r + 10);
//     return r;
//   })
//   .then((r)=>{
//     console.log(parseInt(r) + 20);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//ASYNC/AWAIT


async function run() {
    try {
      const result = await validaPar(2)
        .then(result => {console.log(`El resultado es: ${result}`);return result})
        .then(result => {console.log(`El resultado es: ${result + 10}`);return result})
        .then(result => console.log(`El resultado es: ${result + 20}`));
    } catch (error) {
      console.log(error);
    }
  }
  run();