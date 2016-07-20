function headChange() {
    var headlight = document.getElementById("head_light");
    
    if (headlight.classList.contains('yellow')) {
        headlight.style.fill = "#ffffff";
    }
    else {
        headlight.style.fill = "#ff9900";
    }
    headlight.classList.toggle('yellow');
}

function tailChange() {
    var taillight = document.getElementById("tail_light");
    
    if (taillight.classList.contains('white')) {
        taillight.style.fill = "#ba0000";
    }
    else {
        taillight.style.fill = "#ffffff";
    }
    taillight.classList.toggle('white');
}