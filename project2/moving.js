// http://www.w3schools.com/cssref/css3_pr_transform.asp
var move = function() {
    var button = document.getElementById('mainButton');
    var number = randNum();
    var secondNum = randNum();
    var numbers = checkEdge(number, secondNum);
    button.style.transform = "translate(" + numbers[0] + "px, " + numbers[1] + "px)";
};

function randNum() {
    var num = ((Math.random() * 1000) + 1);
    return num;
}

function checkEdge(number, secondNum) {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var buttonHeight = document.getElementById("mainButton").style.height;
    if ((height - buttonHeight) <= secondNum) {
        if (width <= number) {
            return [100, 200];
        }
        return [number, 200];
    }
    else {
        return [number, secondNum];
    }
}