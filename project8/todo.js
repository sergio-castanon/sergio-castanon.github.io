var entries = [];
var counter = 0;

// Used for the submission of new tasks
var newEntry = function() {

    var text = $("input").val();
    entries.push(text);
    addTodo()
    // Prevents the page from reloading
    event.preventDefault();
    counter++;
}

// Activated by the clear button
function clearAll() {
    for (var i = 0; i < entries.length; i++) {
        entries.pop();
        $('.row').detach();
        counter = 0;
    }
}

function completed() {
        $('.entry:focus').toggleClass('completed');
        $('.entry:focus').toggleClass('uncomplete');
}


function addTodo() {
    var row = document.createElement("div");
    $(row).addClass('row');
    
    var text = $("input").val();
    $('input').val('');
    var button = document.createElement('button');
    $(button).addClass('entry').html(text);
    $(button).addClass('uncomplete');
    $(button).on("click", function() {
        completed();
    });
    var removeButton = document.createElement('button');
    $(removeButton).addClass('remove').html('X');
    $(removeButton).on("click", function() {
        var container = document.getElementById('todosContainer');
        $(this).parent().remove();
        counter--;
    });
    
    $(row).append(button);
    $(row).append(removeButton);
    
    
    var container = document.getElementById('todosContainer');
    $(container).append(row);
}

function filterComplete() {
    $('.entry').filter('.uncomplete').parent().addClass('filter');
}

function filterAll() {
    $('.entry').filter('.entry').parent().removeClass('filter');
}

function filterUncomplete() {
    $('.entry').filter('.completed').parent().addClass('filter');
}