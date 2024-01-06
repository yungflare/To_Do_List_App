// Converting Vanilla JS to jQuery 

function newItem (){
    // adding new item to list 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === ''){
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }
 // crossing out an item for the list of items : 
    function crossOut () {
     li.toggleClass("strike");    
    }
    li.on("click", function crossOut() {
        li.toggleClass("strike");
    });

// adding delete button "X": 
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);
    function deleteListItem (){
        li.addClass("delete")
    }
// Reordering the items : 

    $('#list').sortable();

}

