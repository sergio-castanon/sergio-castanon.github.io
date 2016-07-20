function subtract() {
    var numbers = getInputs();
    var answer = (numbers[0] - numbers[1]);
    setAnswer(answer);
}


function add() {
    var numbers = getInputs();
    var answer = (numbers[0] + numbers[1]);
    setAnswer(answer);
}

function multiply() {
    var numbers = getInputs();
    var answer = (numbers[0] * numbers[1]);
    setAnswer(answer);
}

function divide() {
    var numbers = getInputs();
    var answer = (numbers[0] / numbers[1]);
    setAnswer(answer);
}

function getInputs() {
    var NUM1 = document.getElementById('valueOne');
    var NUM2 = document.getElementById('valueTwo');
    var number = Number(NUM1.value);
    var numberTwo = Number(NUM2.value);
    return [number, numberTwo];
}

function setAnswer(answer) {
    var finalAnswer = document.getElementById('final');
    finalAnswer.value = answer.toFixed(2);
}