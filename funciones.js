//Definir funcion de forma tradicional
 function suma ( num1, num2 ){
    console.log(num1 + num2)
}

//Función de flecha CallBack
 const resta = ( num1, num2) =>{
    console.log(num1 - num2)
}

//desestructuración:
const UbicacionCiudad = ( ) =>{
  return ["Mexico","192.2141", "100m"];
}

//Desestructuración:
const [ciudad, ... longitud] = UbicacionCiudad();
alert(`${ciudad} ---  --- ${longitud}`);