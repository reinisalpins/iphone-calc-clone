    // Initialize variables to store the operands and the operation
    let operand1 = 0;
    let operand2 = null;
    let operation = null;
    
    // Get a reference to the calculator screen, where the result will be displayed
    const screen = document.getElementById("ekrans");
    
    // Function to update the screen with the current value of the operand
    function updateScreen(value) {
        screen.innerText = value;
    }
    
    // Function to clear the screen and reset the calculator to its initial state
    function clearScreen() {
        operand1 = 0;
        operand2 = null;
        operation = null;
        updateScreen(operand1);
    }
    
    // Function to handle numeric button clicks
    function handleNumberClick(event) {
        console.log(event)
        // Get the value of the button that was clicked
        const value = event;
        
        // If an operation has been selected, update the value of operand2
        // Otherwise, update the value of operand1
        if (operation) {
            if (operand2 === null) {
                operand2 = value;
            } else {
                operand2 += value;
            }
            updateScreen(operand2);
        } else {
            if (operand1 === 0) {
                operand1 = value;
            } else {
                operand1 += value;
            }
            updateScreen(operand1);
        }
    }
    
    // Function to handle operation button clicks
function handleOperationClick(event) {
    // Get the value of the button that was clicked

    console.log(event);
    const value = event;

    // If an operation has already been selected, perform the operation using the current
    // values of operand1 and operand2, and update operand1 with the result
    if (operation) {
        switch (operation) {
            case "+":
                operand1 = parseFloat(operand1) + parseFloat(operand2);
                break;
            case "-":
                operand1 = parseFloat(operand1) - parseFloat(operand2);
                break;
            case "*":
                operand1 = parseFloat(operand1) * parseFloat(operand2);
                break;
            case "/":
                operand1 = parseFloat(operand1) / parseFloat(operand2);
                break;
        }

        // Reset operand2 and the operation
        operand2 = null;
        operation = null;

        if(operand1 % 1 !=0){
             operand1 = parseFloat(operand1).toFixed(2);
        }
        // Update the screen with the result
        updateScreen(operand1);
    } else {
        // If no operation has been selected, store the selected operation in the
        // operation variable
        operation = value;
    }
}