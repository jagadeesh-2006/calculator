let screen = document.querySelector('#display');

function appendTodisplay(given) {
    screen.value += given;
}

function clearScreen() {
    screen.value = "";
}

function evaluateexp() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}
