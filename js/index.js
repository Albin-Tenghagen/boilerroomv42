// const operator = document.getElementById("operator");

function sparaSiffra1(){
let firstInput = document.getElementById('siffra1').value;
console.log(firstInput);
return firstInput;
}

function operator1(){
    let operator = document.getElementById('operator').value;
    console.log(operator);
    return operator;
}

 function sparaSiffra2(){
   let secondInput = document.getElementById('siffra2').value;
   console.log(secondInput);
   return secondInput; 
}

function kalkylator() {

    let inputValue1 = sparaSiffra1();
    // console.log(inputValue1);
    
    let inputValue2 = sparaSiffra2();
    // console.log(inputValue2);

    let firstValue = Number(inputValue1)
    let secondValue = Number(inputValue2)
    
    let operatorIKalkylator = operator1();
    

    if (isNaN(firstValue) || isNaN(secondValue)) {
       alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
           return;
    }
    
    let result;
    
    switch (operatorIKalkylator) {
       case '+':
           result = firstValue + secondValue;
       break;
       case '-':
           result = firstValue - secondValue;
       break;
       case '/':
           if (secondValue === 0) {
               alert('Kan inde dividera med noll!')
               return;
           } else if (firstValue === 0){
            alert('Kan inde dividera med noll!')
            return;
           }
           result = firstValue / secondValue;
       break;
       case '*':
           result = firstValue * secondValue;
       break;
       case '%':
        result = firstValue % secondValue;
      break;
      case '**':
        if  (secondValue === 0) {
            alert(`${firstValue} upphöjd med ${secondValue} är lika med noll.`)
            return;
        } else if (firstValue === 0) {
            alert(`${firstValue} upphöjd med ${secondValue} är lika med noll.`)
            return;
        }
         result = firstValue ** secondValue;  
      break;
       default:
       alert('ogiltigt räknesätt, försök igen')
       return;
    }
    
    
    alert(`Resultatet av ${firstValue} ${operatorIKalkylator} ${secondValue} är: ${result}`);
    console.log(`Resultatet av ${firstValue} ${operatorIKalkylator} ${secondValue} är: ${result}`)
    console.log(result);
    
    }
    