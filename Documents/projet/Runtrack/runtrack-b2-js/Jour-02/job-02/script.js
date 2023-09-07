function myAddCount() {
      
    var countDisplayer = document.getElementById("count-displayer");
    var currentCount = countDisplayer.textContent;
// convert var into number     
    var count = parseInt(currentCount); 
    count++;
// update the text with new count 
    countDisplayer.textContent = count;
}

var addButton = document.getElementById("add-count-btn");

addButton.addEventListener("click", myAddCount);