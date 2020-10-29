// Variables
let buttonNumber = document.querySelectorAll('.number')
let buttonSymbol = document.querySelectorAll('.symbol')
let numberDisplayA = document.querySelector('#numbers')
let numberDisplayB = document.querySelector('#symbol')
let numberDisplayA1 = document.querySelector('#numbers')
let totalSymbol = document.querySelector('#total')
let cancel = document.querySelector('#cancel')
let resultA ='';
let resultB = '';
let symbolDisplay = '';

//Function
function sum (a,b){
  let total = parseFloat(a) + parseFloat(b);
  return numberDisplayA.textContent = total
}
function subtract(a,b){
    let total = parseFloat(a) - parseFloat(b);
    return numberDisplayA.textContent = total
}
function multiply (a,b){
    let total = parseFloat(a) * parseFloat(b);
    return numberDisplayA.textContent = total
}
function divide (a,b){
    if(a === '0' || b=== '0'){
        return numberDisplayA.textContent = 'NO NO NO NO NO NO'
    }else{
    let total = parseFloat(a) / parseFloat(b);
  return numberDisplayA.textContent = total
}}

function operate  (a,b,c){
if ('+' === c){
    return sum(a, b);
}
else if('-' === c){
    return subtract(a,b)
}
else if('x' === c){
    return multiply(a,b)
}
else if('/' === c ){
    return divide(a,b)
} 
}

//Event Handler

buttonNumber.forEach(buttonNumber => {buttonNumber.addEventListener('click', event => {
if (symbolDisplay === '' && resultB === ''){
        numberDisplayA.textContent += buttonNumber.value;
      resultA = numberDisplayA.textContent
}
else if (resultA != '' && symbolDisplay != ''){
    numberDisplayA1.textContent += buttonNumber.value;
    resultB = numberDisplayA1.textContent;
    
}
})})

buttonSymbol.forEach(buttonSymbol => {buttonSymbol.addEventListener('click', event => {      
if (numberDisplayB.textContent  === ''){
     numberDisplayB.textContent = buttonSymbol.value;
     numberDisplayA.textContent = ''

    }
    
    symbolDisplay = numberDisplayB.textContent;
    console.log(symbolDisplay)
        })})
      
totalSymbol.addEventListener('click',function(){
  parseFloat(resultA);
  parseFloat(resultB);
  numberDisplayA.textContent = '';
  numberDisplayB.textContent = '';
  operate(resultA, resultB, symbolDisplay);

})   

cancel.addEventListener('click', function(){
    resultA = ''
    resultB = ''
    symbolDisplay = ''
    numberDisplayA.textContent = '';
    numberDisplayB.textContent = '';

})
   // falta bregarar con decimales y q se puedan hacer multiples operaciones 