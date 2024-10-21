
function sparaSiffra1(){
    const firstInput = document.getElementById('siffra1').value;
    console.log(firstInput);
    return firstInput;
}
// hämtar första siffran från användaren

function operator1(){
    const operator = document.getElementById('operator').value;
    console.log(operator);
    return operator;
}
// hämtar operatorn från användaren

 function sparaSiffra2(){
   const secondInput = document.getElementById('siffra2').value;
   console.log(secondInput);
   return secondInput; 
}
// hämtar operatorn siffran från användaren

function kalkylator() {

    let inputValue1 = sparaSiffra1();
    // console.log(inputValue1);
    
    let inputValue2 = sparaSiffra2();
    // console.log(inputValue2);
    //sparar siffran till en input

    let firstValue = Number(inputValue1)
    let secondValue = Number(inputValue2)
    //omvandlar inputen till ett nummer värde


    let operatorIKalkylator = operator1();
    //sparar operator functionens resultat till en variabel som används i switch statementet
    

    if (isNaN(firstValue) || isNaN(secondValue)) {
       alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
           return;
    }
    //kontrollerar så att variablarna är nummer.


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
    //Utför kalkulationen baserat på vilken operatör som valdes.
    // else if satserna kontrollerar så att siffrorna går att räkna med
    
    
    alert(`Resultatet av ${firstValue} ${operatorIKalkylator} ${secondValue} är: ${result}`);
    console.log(`Resultatet av ${firstValue} ${operatorIKalkylator} ${secondValue} är: ${result}`)
    console.log(result);
    // matar ut resultatet i en pop up vy och i consol logen för utvecklare och vanliga användare
    
    }
    