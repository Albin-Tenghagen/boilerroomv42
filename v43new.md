
Let's break down the calculator functionality step-by-step, focusing on the HTML structure, CSS styling, and JavaScript logic.

Step 1: HTML Structure
The HTML is divided into three main sections:

Calculator Container:

This <div class="calculator"> wraps the entire calculator layout and styling.
Display Area:

Inside the calculator container, the <div id="display" class="display">0</div> shows the numbers entered by the user and the results of calculations.
Initially, this display shows 0.
Button Area:

The buttons are organized inside <div class="buttons">.
Each button has a class (number, operator, equals, or clear) that indicates its function and assigns relevant styling.
onclick attributes call specific JavaScript functions to handle the button’s function, like appendNumber(), chooseOperator(), and calculate().
Step 2: CSS Styling
The CSS styles the calculator to look visually appealing and easy to use.

Main Container Styles:

Centered on the screen using display: flex and other positioning properties.
The .calculator class gives a compact width, background color, padding, and rounded corners for a clean layout.
Display Styling:

.display gives a dark background, right-aligned text, and a larger font size, making it look like a digital calculator display.
Button Styling:

Buttons have different colors depending on their role:
Number Buttons (.number): Dark gray with white text.
Operator Buttons (.operator): Orange to stand out.
Equals Button (.equals): Green to signal the final calculation button.
Clear Button (.clear): Red to signify clearing the display.
Step 3: JavaScript Logic
The JavaScript code drives the functionality of the calculator, handling button clicks, storing numbers, choosing operators, and calculating results.

1. Global Variables
javascript
Copy code
let currentInput = '';
let previousInput = '';
let currentOperator = null;
currentInput: Stores the number being entered by the user.
previousInput: Holds the first number when the user selects an operator to perform a calculation.
currentOperator: Stores the operator (+, -, *, or /) selected by the user.
2. Function Definitions
Each function corresponds to specific actions triggered by button clicks.

updateDisplay()
javascript
Copy code
function updateDisplay() {
    document.getElementById('display').textContent = currentInput || '0';
}
This function updates the display area (#display) to show currentInput.
If currentInput is empty, it displays 0 as a placeholder.
appendNumber(number)
javascript
Copy code
function appendNumber(number) {
    if (currentInput === '0' && number === 0) return; // Prevent leading zeroes
    currentInput += number.toString();
    updateDisplay();
}
When a number button is clicked, this function adds that number to currentInput.
Prevents leading zeroes by ignoring additional zeroes if currentInput is already 0.
Calls updateDisplay() to reflect the new currentInput on the display.
appendDecimal()
javascript
Copy code
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}
Adds a decimal point to currentInput if it doesn’t already have one.
Useful for entering decimal numbers like 3.14.
chooseOperator(operator)
javascript
Copy code
function chooseOperator(operator) {
    if (currentInput === '' && previousInput === '') return; // Ignore if no input

    if (previousInput && currentInput) {
        calculate(); // Calculate previous operation if both operands are ready
    }

    previousInput = currentInput;
    currentOperator = operator;
    currentInput = ''; // Clear current input for the next number
}
This function is triggered when an operator button (+, -, *, or /) is clicked.
Step-by-Step:
If both previousInput and currentInput have values, it performs an existing calculation before switching operators.
Sets previousInput to the current input, stores the selected operator, and clears currentInput to prepare for the next number.
This allows continuous calculations like 5 + 3 - 2 in sequence.
calculate()
javascript
Copy code
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return; // Stop if there are no valid numbers

    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = '';
    currentOperator = null;
    updateDisplay();
}
Purpose: Executes the calculation based on previousInput, currentInput, and currentOperator.
Step-by-Step:
Parses previousInput and currentInput as floats to ensure they’re numbers.
Performs the calculation using a switch statement based on currentOperator.
If dividing by zero, it alerts the user and exits.
Updates currentInput with the result, clears previousInput, resets currentOperator, and calls updateDisplay() to show the result.
clearDisplay()
javascript
Copy code
function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperator = null;
    updateDisplay();
}
Resets all variables to their initial state, effectively clearing the calculator’s memory and display.
Summary of Operation Flow
Number Entry:

Each number button click calls appendNumber(), which updates currentInput and displays it.
Operator Selection:

When an operator button is clicked, chooseOperator() stores the current currentInput in previousInput and sets currentOperator.
Clears currentInput to allow entry of the next number.
Calculation:

When = is clicked, calculate() performs the calculation based on previousInput, currentInput, and currentOperator.
Updates currentInput with the result and shows it on the display.
Clear:

The C button calls clearDisplay(), resetting everything so the user can start fresh.
This setup allows for a simple, user-friendly calculator that performs basic arithmetic without using eval() and maintains readability for continuous calculations.