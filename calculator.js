
function display(value) {
    var screen = document.getElementById("solution");
    screen.value += value;
}


function clearCharacter() {
    var screen = document.getElementById("solution");
    screen.value = "";
}


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
