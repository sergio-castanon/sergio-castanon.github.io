function click() {
    console.log('working');
    var firstButton = document.getElementById('one');
    firstButton.addEventListener('click', function() {
    var newTing = document.createElement('p');
    newTing.innerHTML = 'Welcome'
    
    var container = document.getElementById('container');
    
    container.appendChild(newTing);
    })
    
}