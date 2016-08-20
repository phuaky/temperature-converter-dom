//Issues not resolved
  //1. unable to clear display when clear button is clicked
  //2. unable to run calculation to display when radio button is checked on default.

var tempType;

function setInputAsDisplayForFarenheitToC() {
  var display = document.getElementById("display");
  var inputValue = document.getElementsByTagName("input")[0].value;

  //calculations
  var farenheitToC = Math.round((inputValue - 32) * 5/9 )+ "°C";

  display.textContent = farenheitToC;

}

function setInputAsDisplayForCelciusToF() {
  var display = document.getElementById("display");
  var inputValue = document.getElementsByTagName("input")[0].value;

  //calculations
  var cToFarenheit = (inputValue * 9/5) + 32 + "°F";

  display.textContent = cToFarenheit;

}

function clearDisplay() {
  document.getElementsByTagName("input")[0].value = " ";
}


//LACKING THE FUNCTION THAT CHANGES RADIO BUTTON F TO C
function finalChoice() {
    if (tempType === 'farenheit') {
    // run function to convert to celcius
    setInputAsDisplayForFarenheitToC();

    console.log('i am farenheit');

  } else if (tempType === 'celcius') {
    // run function to convert to farenheit
    setInputAsDisplayForCelciusToF();

    console.log('i am celcius');
  }
}

//push calculated input to display box
document.getElementById("setDisplay").addEventListener("click", function() {
  console.log("working");
  finalChoice();
  console.log("sure bo?");
});

//clear input value
document.getElementById("clearDisplay").addEventListener("click", function() {
  console.log("readingClearButton");
  clearDisplay();
});


document.getElementsByClassName("tempSelect")[0].addEventListener("click", function(){
  console.log('i am farenheit')
  tempType = 'farenheit'
  ;
});

document.getElementsByClassName("tempSelect")[1].addEventListener("click", function(){
  console.log('i am celcius')
  tempType = 'celcius'
});






















//
// //link inputV from html to javascript
// function inputV() {
//   console.log(document.getElementById("input")[0].id + "is working");
// }
//
//
//
// //calculate F to C
//
//
//   // radio = 0;
//
//
// //calculate C to F
//
//   // radio = 1;
//
//
// //read if is C or F
// function fOrC() {
//
//   var resultC = (inputV - 32) * 5/9;
//     var resultF = ((inputV * 1.8) +32);
//
  // if (document.getElementsByClassName("tempSelect")[0].id === 'farenheit') {
  //   // run function to convert to celcius
  //
  //   console.log('i am farenheit');
  //
  // } else if (document.getElementsByClassName("tempSelect")[0].id === 'celsius') {
  //   // run function to convert to farenheit
  // }
//
//     console.log('i am celsius');
//   }
//   // console.log(document.getElementsByClassName("tempSelect")[1].id)
// }
//
// fOrC();
//
// //display calculation
// function displayCalculatedResult() {
//   return fOrC;
// }



// function fOrC() {
//   var radio = getElementsByClassName("radios")
//
//   for (i = 0; i < radio.length; i++) {
//     if (radio[i] === F) {
//       //calculate inputF into celcius
//       var resultC = (inputV -32) * 5/9;
//       //sent result to display
//       return resultC to display
//
//     } else {
//       var resultF = ((inputV * 1.8) + 32)
//       //sent result to display
//       return resultF to display
//     }
//
//   }
// }
