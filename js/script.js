var introText = 'Hi 👋🏻 ; I\'m Carolina Kennedy... ; Thanks for visiting my site! 🥳;';
var splitArray = introText.split("");
var timer;
var spaceChar = '';

function typeWriter() {
    if(splitArray.length > 0){
        spaceChar = splitArray.shift();
        if(spaceChar == ';'){
            document.getElementById('intro-text').innerHTML += '<br>';
        } else{
            document.getElementById('intro-text').innerHTML += spaceChar;
        }
    } else {
        clearTimeout(timer);
        return false;
    }
    timer = setTimeout ('typeWriter()', 80) ;
}

window.addEventListener('load',typeWriter);
