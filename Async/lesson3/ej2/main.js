/*
Ejercicio 2
*Crear una función que reciba un array con nombres de personas y devuelva una promesa que 
 resuelve con un saludo ya personalizado para cada persona. (Por ejemplo: "Hola, Ana" o "Hola, Juan").
*Sacar por consola el saludo de cada persona, después sacar por consola el mensaje de 
 "Personas saludadas: (Y AQUI LOS NOMBRES DE LAS PERSONAS)".
*Ver si puedes transformarlo a async/await.
 */

const checkNumber = (element) => typeof(element) === 'number';

// function hellAll(list_name){
//   return new Promise((resolve, reject) => {
//     if (!list_name.some(checkNumber)){    
//       for (let i=0;i<list_name.length;i++){
//             console.log("Hola " + list_name[i]);
//           } 
//           resolve("Lista de personas saludadas: " + list_name);
//         }        
//         else {
//           reject(new Error('No es un string'));
//         }
//   });
// }

// // names = ['n1','n2',5,'n4','n5'];
// names = ['n1','n2','n3','n4','n5'];

// hellAll(names).then((n)=> {
//   console.log(n);
// })
// .catch((e)=>console.error(e))
// .finally(()=>console.log("--------------"))

//ASYNC/AWAIT

async function hellAll(list_name){
  return new Promise((resolve, reject) => {
    if (!list_name.some(checkNumber)){    
      for (let i=0;i<list_name.length;i++){
            console.log("Hola " + list_name[i]);
          } 
          resolve("Lista de personas saludadas: " + list_name);
        }        
        else {
          reject(new Error('No es un string'));
        }
  });
}

// names = ['n1','n2',5,'n4','n5'];
names = ['n1','n2','n3','n4','n5'];

async function run() {
  try {
    const result = await hellAll(names)
      .then(result => console.log(`El resultado es: ${result}`))
  } catch (error) {
    console.log(error);
  }
  finally{
    ()=>console.log("--------------")
  }
}
run();