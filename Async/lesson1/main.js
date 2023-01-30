const url = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://fakestoreapi.com/products'

async function getDataFromUrl(u){
  const response = await fetch (u);
  const json = await response.json();
  return json;
}

getDataFromUrl(url2).then((value)=>console.log(value));

// console.log("--------------------------");
// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))