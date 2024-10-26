// console.log("JavaScript file loaded!");

// // Globala variabler för att lagra siffror och operator
// let firstInput = null;
// let secondInput = null;
// let operator = null;


// function sparaSiffra1(button) {
//     firstInput = Number(button.textContent); // Tilldelar värdet till den globala variabeln
//     console.log("Första siffran:", firstInput);
// }

// function operator1(button) {
//     operator = button.textContent; // Tilldelar operatorn till den globala variabeln
//     console.log("Operator:", operator);
// }

// function sparaSiffra2(button) {
//     secondInput = Number(button.textContent); // Tilldelar värdet till den globala variabeln
//     console.log("Andra siffran:", secondInput);
// }

// function calculation() {
//     let continueCalculation = true;

//     do {
//         // Kontrollera om alla värden är tilldelade
//         if (firstInput === null || secondInput === null || operator === null) {
//             alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
//             return;
//         }

//         let result;

//         switch (operator) {
//             case '+':
//                 result = firstInput + secondInput;
//                 break;
//             case '-':
//                 result = firstInput - secondInput;
//                 break;
//             case '/':
//                 if (secondInput === 0) {
//                     alert('Kan inte dividera med noll!');
//                     return;
//                 }
//                 result = firstInput / secondInput;
//                 break;
//             case '*':
//                 result = firstInput * secondInput;
//                 break;
//             case '%':
//                 result = firstInput % secondInput;
//                 break;
//             case '**':
//                 result = firstInput ** secondInput;
//                 break;
//             default:
//                 alert('Ogiltigt räknesätt, försök igen');
//                 return;
//         }
//         alert(`resultatet av ${firstInput} ${operator} ${secondInput} är = ${result}`)
//         console.log(`Resultat: ${result}`);

//         // Frågar om användaren vill fortsätta och läser in svaret
//         let ternaryChoice = prompt('Vill du fortsätta? "Ja" eller "Nej"').toLowerCase();
//         continueCalculation = ternaryChoice === "ja" ? true : false;

//         // if (continueCalculation) {
//         //     // Återställ variabler för en ny beräkning
//         //     firstInput = parseFloat(prompt("Ange första siffran:"));
//         //     operator = prompt("Ange operator (+, -, /, *, %, **):");
//         //     secondInput = parseFloat(prompt("Ange andra siffran:"));
//         // }
        
//     if (continueCalculation) {   // Återställ variabler för en ny beräkning
//         firstInput = null;
//         secondInput = null;
//         operator = null;
//     }
    
//     } while (continueCalculation === true);
// }

console.log("JavaScript file loaded!");

// Globala variabler för att lagra siffror och operator
let firstInput = null;
let secondInput = null;
let operator = null;
   
function sparaSiffra1(button) {
    firstInput = button.textContent; // Tilldelar värdet till den globala variabeln
    // let finalNumber = Number(firstInput);
    console.log("Första siffran:", firstInput);
 }

function operator1(button) {
    operator = button.textContent; // Tilldelar operatorn till den globala variabeln
    console.log("Operator:", operator);
}

function sparaSiffra2(button) {
    secondInput = Number(button.textContent); // Tilldelar värdet till den globala variabeln
    console.log("Andra siffran:", secondInput);
}

function calculation() {
    let continueCalculation = true;

    do {
        // Kontrollera om alla värden är tilldelade
        if (firstInput === null || secondInput === null || operator === null) {
            alert("Felaktig inmatning. Var vänlig mata in giltiga nummer.");
            return;
        }

        let result;

        switch (operator) {
            case '+':
                result = firstInput + secondInput;
                break;
            case '-':
                result = firstInput - secondInput;
                break;
            case '/':
                if (secondInput === 0) {
                    alert('Kan inte dividera med noll!');
                    return;
                }
                result = firstInput / secondInput;
                break;
            case '*':
                result = firstInput * secondInput;
                break;
            case '%':
                result = firstInput % secondInput;
                break;
            case '**':
                result = firstInput ** secondInput;
                break;
            default:
                alert('Ogiltigt räknesätt, försök igen');
                return;
        }

        console.log(`Resultat: ${result}`);

        // Frågar om användaren vill fortsätta och läser in svaret
        let ternaryChoice = prompt('Vill du fortsätta? "Ja" eller "Nej"').toLowerCase();
        continueCalculation = ternaryChoice === "ja" ? true : false;

        if (continueCalculation) {
            // Återställ variabler för en ny beräkning
            firstInput = null;
            secondInput = null;
            operator = null;
        }

    } while (continueCalculation === true);
}