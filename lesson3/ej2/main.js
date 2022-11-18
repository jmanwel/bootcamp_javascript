
var pin2 = '1234';

// for (var i = 0; i<4; i++){
//     let pin = prompt('Introduce el PIN:');
//         if(pin2 === pin){
//             console.log("That's true!");
//             break;
//         }else{
//             console.log("Sorry!!, that's wrong");        
//         }
// }

var pin = '';

while (pin.toLowerCase() != 'salir') {
    pin = prompt('Introduce el PIN:');
    if(pin2 === pin){
        console.log("That's true!");
        break;
    }else{
        console.log("Sorry!!, that's wrong");        
    }
  }