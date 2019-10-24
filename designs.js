// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
var colorPicker = document.querySelector("#colorPicker").value;
var pixelCanvas = document.getElementById("pixelCanvas"),pixels;
var sizePicker = document.getElementById('sizePicker');

function makeGrid(height, width) {

    for (var i = 0; i < height; i++) {
        var tableRow = document.createElement("tr");
        for (var j = 0; j < width; j++) {
            var tableCell = document.createElement("td");
            tableRow.appendChild(tableCell);
        }
        pixelCanvas.appendChild(tableRow);
    }
}

function colorPixel(e){
  colorPicker = document.querySelector("#colorPicker").value;
  e.target.style.backgroundColor = colorPicker;
}

sizePicker.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById("pixelCanvas").innerHTML = "";

    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    makeGrid(height,width);

    var pixels = document.querySelectorAll('td');
    for (var i = 0; i < pixels.length; i++) {
        pixels[i].addEventListener('click', colorPixel, false);
    }
});
