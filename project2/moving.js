// http://www.w3schools.com/cssref/css3_pr_transform.asp
var height = window.innerHeight;
var width = window.innerWidth;

var move = function() {
    var button = document.getElementById('mainButton');
    var number = randNum();
    var secondNum = randNum();
    button.style.transform = "translate(" + number + "px, " + secondNum + "px)";
};

function randNum() {
    var num = ((Math.random() * 1000) + 1);
    return num;
}