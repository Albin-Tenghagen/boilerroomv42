function kalkylator() {
    let firstInput = parseFloat(prompt("första siffran"));
    let secondInput = parseFloat(prompt("andra siffran"));
    
    
    if (isNaN(firstInput) || isNaN(secondInput)) {
       alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
           return;
    }
    
    
    
    
     let firstValue = Number(firstInput)
    let secondValue = Number(secondInput)
    
    
    let operation = prompt("välj en operation (+, -, /, *)")
    
    
    let result;
    
    
    switch (operation) {
       case '+':
           result = firstInput + secondInput;
       break;
       case '-':
           result = firstInput - secondInput;
       break;
       case '/':
           if (secondInput === 0) {
               alert('Kan inde dividera med noll!')
               return;
           }
           result = firstInput / secondInput;
       break;
       case '*':
           result = firstInput * secondInput;
       break;
       default:
       alert('ogiltigt räknesätt, försök igen')
       return;
    }
    
    
    alert(`Resultatet av ${firstInput} ${operation} ${secondInput} är: ${result}`);
    
    console.log(result);
    
    
    }
    
    
    kalkylator()