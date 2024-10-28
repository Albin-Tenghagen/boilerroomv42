/* console.log("JavaScript file loaded!");

// Global variable to store the operator
let operator = null;

// Function to save the chosen operator
function chooseOperator(op) {
    operator = op;
    console.log("Operator selected:", operator);
}

// Function to perform calculations with a loop
function calculate() {
    let continueCalculation = true;

    while (continueCalculation) {
        // Get the values from input fields
        const firstInput = parseFloat(document.getElementById("firstInput").value);
        const secondInput = parseFloat(document.getElementById("secondInput").value);

        // Check if inputs and operator are valid
        if (isNaN(firstInput) || isNaN(secondInput) || operator === null) {
            alert("Please enter valid numbers and select an operator.");
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
                    alert("Cannot divide by zero!");
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
                alert("Invalid operator. Please select a valid operator.");
                return;
        }

        // Display the result
        console.log(`Result: ${result}`);
        alert(`Result: ${result}`);
        document.getElementById("resultDisplay").textContent = `Result: ${result}`;

        // Ask if the user wants to continue with a new calculation
        let userChoice = prompt("Would you like to perform another calculation? (yes/no)").toLowerCase();
        continueCalculation = userChoice === "yes";

        if (continueCalculation) {
            // Clear the inputs and operator for a new calculation
            document.getElementById("firstInput").value = "";
            document.getElementById("secondInput").value = "";
            // document.getElementById("resultDisplay").textContent = "Result: ";
            operator = null;
        }
    }
} */
// -----------------------------

console.log("JavaScript file loaded!");

// Global variable to store the operator
let operator = null;

// Array to store each result.. 
let resultHistory = [];

// Function to save the chosen operator
function chooseOperator(op) {
    operator = op;
    console.log("Operator selected:", operator);
}


// Function to get results history and showing result in html.
function addResult(firstInput, operator, secondInput, result) { 
    // Add a new entry with calculation details to the history
    resultHistory.push({ firstInput, operator, secondInput, result });
    
    // This update the HTML to display the result history.. 
    const historyContainer = document.getElementById("resultHistory");
    historyContainer.innerHTML = ''; 
    
    // This display each result in the history,
    resultHistory.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Result: ${entry.firstInput} ${entry.operator} ${entry.secondInput} = ${entry.result}`;
        historyContainer.appendChild(listItem);
    });
}

//  // Function to get results history and showing result in html.
//  function addResult(result, firstInput, secondInput) { 
//     // This add new rezult to the history..
//     resultHistory.push(result);
      
//     // This Update the HTML to display the result history..
//     const historyContainer = document.getElementById("resultHistory");
//     historyContainer.innerHTML = ''; 
      
//     //This Display each result in the history.
//     resultHistory.forEach((res, index) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `Result: ${firstInput} ${operator} ${secondInput} = ${res}`;  // ${res}` => result for history.
//     historyContainer.appendChild(listItem);
//     });
//  }

// Function to perform calculations with a delay in the loop
function calculate() {
    let continueCalculation = true;

    while (continueCalculation) {
        // Get the values from input fields
        const firstInput = parseFloat(document.getElementById("firstInput").value);
        const secondInput = parseFloat(document.getElementById("secondInput").value);


        // Check if inputs and operator are valid
        if (isNaN(firstInput) || isNaN(secondInput) || operator === null) {
            alert("Please enter valid numbers and select an operator.");
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
                    alert("Cannot divide by zero!");
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
                alert("Invalid operator. Please select a valid operator.");
                return;
        }

        // Display the result
        console.log(`Result: ${result}`);
        // alert(`Result: ${result}`);
        document.getElementById("resultDisplay").textContent = `Result: ${result}`;
        document.getElementById("lastDisplay").textContent = `Last Result: ${firstInput} ${operator} ${secondInput} = ${result}`


       
  
  // Call the addResult function to save and display history
//   addResult(result, firstInput, secondInput); 
  addResult(firstInput, operator, secondInput, result); 


        
        // Used setTimeout to delay the prompt for user choice
        setTimeout(() => {
            let validResponse = false; // Track if a valid response is given
            let userChoice;

            // Loop until a valid response is received
            while (!validResponse) {
                userChoice = prompt("Would you like to perform another calculation? (yes/no)").toLowerCase();
                
                // Ternary operator to validate response
                validResponse = (userChoice === "yes" || userChoice === "no") 
                                ? true 
                                : (alert("Please enter 'yes' or 'no'."), false);
            }

            if (userChoice === "yes") {
                // Clear the inputs and reset operator for a new calculation
                document.getElementById("firstInput").value = "";
                document.getElementById("secondInput").value = "";
                document.getElementById("resultDisplay").textContent = "Result: ";
                operator = null;
            } else {
                // End the loop if the user does not want to continue
                continueCalculation = false;
            }
        }, 2000); // Delay the prompt to allow page to update(2000= 2seconds)
        break;
    }
}
    
