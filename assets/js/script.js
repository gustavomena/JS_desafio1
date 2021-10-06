// declaro una variable que contiene el codigo de una linea en la tabla para imprimirla por html
const row =
  '<tr id="resultDescription"><th scope="row"id="txtDescription">DESCRIPTION</th><td><span id="txtResult">RESULT</span></td></tr>';

document.getElementById("question_2").addEventListener("click", function () {
  document.getElementById("tableBody").innerHTML = ""; //limpio el cuerpo de la tabla
  //consulto por los 2 numeros
  const numOne = prompt("Ingrese el primer numero", "1");
  const numTwo = prompt("Ingrese el Segundo numero", "1");

  if (!isNaN(numOne) && !isNaN(numTwo)) {
    //verifico que sean numeros
    if (numOne > 0 && numTwo > 0) {
      //verifico que sean mayores que cero
      if(numOne!=numTwo){//verifico que sean diferentes
        let row1 = row; //copia el valor del inicio para hacer un row dentro de la tabla
        row1 = row1.replace("DESCRIPTION", "Suma"); //reemplaza  el texto DESCRIPTION para inyectar el texto que necesito
        row1 = row1.replace("RESULT", addTwoNumbers(numOne, numTwo)); //Lo mismo que el anterior, pero con el valor calculado
  
        let row2 = row;
        row2 = row2.replace("DESCRIPTION", "Resta");
        row2 = row2.replace("RESULT", substractTwoNumbers(numOne, numTwo));
  
        let row3 = row;
        row3 = row3.replace("DESCRIPTION", "Division");
        row3 = row3.replace("RESULT", divideTwoNumbers(numOne, numTwo));
  
        let row4 = row;
        row4 = row4.replace("DESCRIPTION", "Modulo");
        row4 = row4.replace("RESULT", moduleTwoNumbers(numOne, numTwo));
  
        document.getElementById("tableBody").innerHTML =
          row1 + row2 + row3 + row4; //inyecta los resultados a la tabla
      } else{
        alert("Deben ser numeros diferentes");
      }
      
    } else {
      alert("Debes ingresar numeros mayores a cero");
    }
  } else {
    alert("Debes ingresar solo numeros");
  }
});
//las funciones que utiliza la pregunta 2
function addTwoNumbers(a, b) {
  return Number(a) + Number(b);
}
function substractTwoNumbers(a, b) {
  return Number(a) - Number(b);
}
function divideTwoNumbers(a, b) {
  if (b != "0" && b != null) {
    return Number(a) / Number(b);
  } else {
    return "";
  }
}
function moduleTwoNumbers(a, b) {
  if (b != "0" && b != null) {
    return Number(a) % Number(b);
  } else {
    return "";
  }
}

document.getElementById("question_3").addEventListener("click", function () {
  document.getElementById("tableBody").innerHTML = "";

  const celciusDegrees = prompt("Ingrese temperatura en grados Celcius", "0");

  if (!isNaN(celciusDegrees)) {
    const kDegrees = Number(celciusDegrees) + Number("273.15");
    const fDegrees = Number(celciusDegrees) * (9 / 5) + 32;
    let row1 = row;
    row1 = row1.replace("DESCRIPTION", "Grados Kelvin");
    row1 = row1.replace("RESULT", kDegrees + "&#176;K"); //
    let row2 = row;
    row2 = row2.replace("DESCRIPTION", "Grados Fahrenheit");
    row2 = row2.replace("RESULT", fDegrees + "&#176;F");

    document.getElementById("tableBody").innerHTML = row1 + row2;
  } else {
    alert("Debes ingresar solo numeros");
  }
});

document.getElementById("question_4").addEventListener("click", function () {
  document.getElementById("tableBody").innerHTML = "";

  let days = prompt("Ingrese la cantidad de dias", "0");

  if (!isNaN(days)) {
    const years = Math.floor(days / 365);
    const weeks = Math.floor((days - years * 365) / 7);
    days = days - weeks * 7 - years * 365;

    //se arma el string para inyectarlo al html
    let row1 = row;
    row1 = row1.replace("DESCRIPTION", "Años");
    row1 = row1.replace("RESULT", years);
    let row2 = row;
    row2 = row2.replace("DESCRIPTION", "semanas");
    row2 = row2.replace("RESULT", weeks);
    let row3 = row;
    row3 = row3.replace("DESCRIPTION", "dias");
    row3 = row3.replace("RESULT", days);
    //inyecta los resultados
    document.getElementById("tableBody").innerHTML = row1 + row2 + row3;
  } else {
    alert("Debes ingresar solo numeros");
  }
});

document.getElementById("question_5").addEventListener("click", function () {
  document.getElementById("tableBody").innerHTML = "";

  let sum = 0; //guarda la suma
  let avg = 0; //guarda el promedio

  for (let index = 1; index < 5; index++) {
    let number = prompt("Ingrese numero " + index, "0");
    if (!isNaN(number)) {
      sum += Number(number);
      avg += Number(number) / 5;
    } else {
      alert("Debes ingresar solo numeros");
    }
  }

  let row1 = row;
  row1 = row1.replace("DESCRIPTION", "Suma");
  row1 = row1.replace("RESULT", sum);
  let row2 = row;
  row2 = row2.replace("DESCRIPTION", "Promedio");
  row2 = row2.replace("RESULT", avg.toPrecision(7));

  document.getElementById("tableBody").innerHTML = row1 + row2;
});
