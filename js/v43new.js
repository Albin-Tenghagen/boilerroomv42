console.log("JavaScript file loaded!");

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
}
