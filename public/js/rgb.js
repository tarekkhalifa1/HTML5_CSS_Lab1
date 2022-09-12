const textDiv = document.getElementById('text');
var red = document.getElementById('red');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var r = 255;
var g = 0;
var b = 0; 
var rgb = `${r}, ${g}, ${b}`;

red.addEventListener('input', function(){
    r = red.value;
    rgb = `${r}, ${g}, ${b}`;
    textDiv.style.color = `rgb(${rgb})`
});


green.addEventListener('input', function(){
    g = green.value;
    rgb = `${r}, ${g}, ${b}`;
    textDiv.style.color = `rgb(${rgb})`
});


blue.addEventListener('input', function(){
    b = blue.value;
    rgb = `${r}, ${g}, ${b}`;
    textDiv.style.color = `rgb(${rgb})`
});
