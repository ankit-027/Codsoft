let input = document.querySelector('.txt');

function appendValue(x) {
    input.value += x;
}

function calculate() {
    try {
        input.value = math.evaluate(input.value);
    } catch {
        input.value = 'Error';
    }
}

function erase() {
    input.value = "";
}