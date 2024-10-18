// function sparadSiffraEtt() {
//     let siffraEtt = document.getElementById("siffra1").value;
//     // alert("The user typed '" + siffraEtt + "'");
//     console.log(siffraEtt);
// }
    
// function valdOperator() {
//     let operator = document.getElementById("operatör").value;
//     console.log(operator);
// }

// function sparadSiffraTvå() {

//     let siffraTvå = document.getElementById("siffra2").value;
//     // alert("The user typed '" + siffraTvå + "'");
//     console.log(siffraTvå);
// }


let firstInput = document.getElementById("siffra1");


let operator = document.getElementById("operator");

let secondInput = document.getElementById("siffra2");























// function kalkylator() {
//     // let firstInput = document.getElementById("siffra1");
//     // let inputValue1 = input.value;
//     // let secondInput = document.getElementById("siffra2");
//     // let inputValue2 = input.value;
    

//     let inputValue1 = firstInput;
//     console.log(inputValue1);
    
//     let inputValue2 = secondInput;
//     console.log(inputValue2);



//     if (isNaN(inputValue1) || isNaN(inputValue2)) {
//        alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
//            return;
//     }
    

//     let firstValue = Number(inputValue1)
//     let secondValue = Number(inputValue2)
    
//     let operatorIKalkylator = operator;
    
    
    
//     let result;
    
    
//     switch (operator) {
//        case '+':
//            result = firstValue + secondValue;
//        break;
//        case '-':
//            result = firstValue - secondValue;
//        break;
//        case '/':
//            if (secondValue === 0) {
//                alert('Kan inde dividera med noll!')
//                return;
//            }
//            result = firstValue / secondValue;
//        break;
//        case '*':
//            result = firstValue * secondValue;
//        break;
//        case '%':
//         result = firstValue % secondValue;
//       break;
//       case '**':
//         if  (secondValue === 0) {
//             alert(`${firstInput} upphöjd med ${secondInput} är lika med noll.`)
//             return;
//         } else if (firstInput === 0) {
//             alert(`${secondValue} upphöjd med ${firstInput} är lika med noll.`)
//             return;
//         }
//          result = firstValue ** secondValue;  
//       break;
//        default:
//        alert('ogiltigt räknesätt, försök igen')
//        return;
//     }
    
    
//     alert(`Resultatet av ${firstInput} ${operator} ${secondValue} är: ${result}`);
    
//     console.log(result);
    
    
//     }
    