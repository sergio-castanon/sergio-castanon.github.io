var counter = 0;

// window.onload(function() {
//     if (Storage != 'undefined') {
        
//     }
// })



function addToTable() {
    var box = document.getElementById('readings');
    
    var tableRow = document.createElement('tr');
    tableRow.className = 'log';
    
    var tableData = document.createElement('td');
    var date = document.createElement('input');
    date.type = 'date';
    date.className = 'dateOf';
    (tableData).appendChild(date);
    
    var tableReading1 = document.createElement('td');
    var input1 = document.createElement('input');
    input1.type = 'number';
    input1.min = '0';
    input1.max = '1000';
    input1.id = 'glucoseOne';
    input1.className = ('input breakfast');
    (tableReading1).appendChild(input1);
    
    var tableReading2 = document.createElement('td');
    var input2 = document.createElement('input');
    input2.type = 'number';
    input2.min = '0';
    input2.max = '1000';
    input2.id = 'glucoseTwo';
    input2.className = ('input lunch');
    (tableReading2).appendChild(input2);
    
    var tableReading3 = document.createElement('td');
    var input3 = document.createElement('input');
    input3.type = 'number';
    input3.min = '0';
    input3.max = '1000';
    input3.id = 'glucoseThree';
    input3.className = ('input dinner');
    (tableReading3).appendChild(input3);
    
    var tableReading4 = document.createElement('td');
    var input4 = document.createElement('input');
    input4.type = 'number';
    input4.min = '0';
    input4.max = '1000';
    input4.id = 'glucoseFour';
    input4.className = ('input night');
    (tableReading4).appendChild(input4);
    
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.addEventListener('click', function() {
        var box = document.getElementById('readings');
        (box).removeChild(tableRow);
        counter--;
    });
    
    
    
    (tableRow).appendChild(tableData);
    (tableRow).appendChild(tableReading1);
    (tableRow).appendChild(tableReading2);
    (tableRow).appendChild(tableReading3);
    (tableRow).appendChild(tableReading4);
    (tableRow).appendChild(deleteButton);
    (box).appendChild(tableRow);
    counter++;
    
}
 var avgBreakfast = 0;
 var avgLunch = 0;
 var avgDinner = 0;
 var avgNight = 0;
function getData() {
    var box = document.getElementById('readings');
    var glucoseDate = document.getElementsByClassName('dateOf');
    var firstGlucose = document.getElementsByClassName('breakfast');
    var secondGlucose = document.getElementsByClassName('lunch');
    var thirdGlucose = document.getElementsByClassName('dinner');
    var fourthGlucose = document.getElementsByClassName('night');
    
    var dates = [];
    var first = [];
    var second = [];
    var third = [];
    var fourth = [];
    
    for (var i = 0; i < firstGlucose.length; i++) {
        dates.push(glucoseDate[i].value);
        first.push(firstGlucose[i].value);
        second.push(secondGlucose[i].value);
        third.push(thirdGlucose[i].value);
        fourth.push(fourthGlucose[i].value);
    }
    
    
    // var rows = firstGlucose.length;
    // for (var i = 0; i < rows; i++) {
    //     avgBreakfast += Number(firstGlucose[i].value);
        
    //     avgLunch += Number(secondGlucose[i].value);
        
    //     avgDinner += Number(thirdGlucose[i].value);
        
    //     avgNight += Number(fourthGlucose[i].value);
    // }
    
    // var avgOne = document.getElementById('avgB');
    // var avgTwo = document.getElementById('avgL');
    // var avgThree = document.getElementById('avgD');
    // var avgFour = document.getElementById('avgN');
    
    // avgOne.innerHTML = avgBreakfast;
    // avgTwo.innerHTML = avgLunch;
    // avgThree.innerHTML = avgDinner;
    // avgFour.innerHTML = avgNight;
    
    var results = JSON.stringify([first, second, third, fourth]);
    localStorage.setItem('date', JSON.stringify(dates));
    var datesReceived = localStorage.getItem('date');
    var datesOutput = JSON.parse(datesReceived);
    localStorage.setItem(('readings'), JSON.stringify(results));
    var dataReceived = localStorage.getItem('readings');
    var dataOutput = JSON.parse(dataReceived);
            
    
    return dataOutput;
    
}


document.addEventListener('keyup', function() {
    var elements = document.getElementsByClassName('input');
    for ( var i = 0; i < elements.length; i++ ) {
        if (elements[i].value >= 150) {
                elements[i].style.background = '#ff9999';
        }
        if (elements[i].value < 150 && elements[i].value > 75 ){
            elements[i].style.background = '#55ff55';
        }
        if (elements[i].value <= 75) {
            elements[i].style.background = '#8899ff';
        }
        if (elements[i].value == '') {
            elements[i].style.background = 'none';
        }
        
    }
    
    
    var final = getData();
    
});