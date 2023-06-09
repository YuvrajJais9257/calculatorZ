// Function to display the clicked value on the screen
function display(value) {
    var screen = document.getElementById("solution");
    screen.value += value;
}

// Function to clear the screen
function clearCharacter() {
    var screen = document.getElementById("solution");
    screen.value = "";
}

// Function to perform the calculation and display the result
function calculate() {
    var screen = document.getElementById("solution");
    var expression = screen.value;

    try {
        var result = eval(expression);
        screen.value = result;
    } catch (error) {
        screen.value = "Error";
    }
}
