// var theBar = function() {
//     var width = 1;
//     var text = document.getElementById('textBox');
//     text.addEventListener('keypress', function() {
//         width++;
//         progress.style.width = width + "%";
//     });
//     var progress = document.getElementById('bar');
    
// };

function markProgress() {
    var width = 1;
    var text = document.getElementById('textBox');
    var progress = document.getElementById('bar');
        text.addEventListener('keypress', function() {
            if (width == 100) {
                alert("I'm in.");
            }
            else {
                width++;
                progress.style.width = width + '%';
            }
        });
    
    }
