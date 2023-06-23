function playSong()
{
    let audio = new Audio("Stylesong.mp3")
    audio.play();
}


var addedItems = [];

function addItem() {
    var addedItem = document.getElementById("item-input");
    var input = addedItem.value;


    if(input !== "")
    {
        var listItem = document.createElement("li");
        listItem.textContent = input;
        
        if(addedItems.includes(input))
        {
            alert("You have already added that in your list");
        }
        else{
            addedItems.push(input);
        }
        var itemList = document.getElementById("list");
        
        itemList.appendChild(listItem);
        

        addedItem.value = "";
    }
}


function clearLastItem() {
    var itemList = document.getElementById("list");
    var lastItem = itemList.lastElementChild;
  
    if (lastItem !== null) {
      itemList.removeChild(lastItem);
    }
  }