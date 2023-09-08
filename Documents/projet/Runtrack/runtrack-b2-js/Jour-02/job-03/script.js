//put the text into text-displayer

function myDisplayText() {
    
    var inputElement = document.getElementById("input-text");
    var textDisplayer = document.getElementById("text-displayer");
    var inputValue = inputElement.value;
    textDisplayer.textContent = inputValue;
}

var displayButton = document.getElementById("display-text-btn");
displayButton.addEventListener("click", myDisplayText);

//Turn text bold

function myTurnBold() {
    var textDisplayer = document.getElementById("text-displayer");
    var Bold = window.getComputedStyle(textDisplayer).fontWeight === '700';
    
    if (Bold) {
        textDisplayer.style.fontWeight = 'normal';
    } else {
        textDisplayer.style.fontWeight = 'bold';
    }
}

var boldButton = document.getElementById("turn-text-bold");
boldButton.addEventListener("click", myTurnBold);

//Turn text italic

function myTurnItalic() {
    var textDisplayer = document.getElementById("text-displayer");
    var isItalic = window.getComputedStyle(textDisplayer).fontStyle === 'italic';
    
    if (isItalic) {
        textDisplayer.style.fontStyle = 'normal';
    } else {
        textDisplayer.style.fontStyle = 'italic';
    }
}

var italicButton = document.getElementById("turn-text-italic");
italicButton.addEventListener("click", myTurnItalic);

//Clear all fontstyle

function myClearText() {
    
    var textDisplayer = document.getElementById("text-displayer");
    textDisplayer.style.fontWeight = 'normal';
    textDisplayer.style.fontStyle = 'normal';
}

var clearEffectsButton = document.getElementById("turn-text-clear");
clearEffectsButton.addEventListener("click", myClearText);


