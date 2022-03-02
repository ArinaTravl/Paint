const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')
let red = document.getElementById('r')
let blue = document.getElementById('b')
let green = document.getElementById('g')
let orange = document.getElementById('o')
let pink = document.getElementById('p')
let palette = document.getElementById('palette')
let brush = document.getElementById('brush')
let round = document.getElementById('round')
let square = document.getElementById('square')

let paletteСontainer = document.getElementById('palette_container')

    palette.onclick  = function(){
         paletteСontainer.onmouseleave = function(){
            ctx.strokeStyle = palette.value 
        }
    };

round.onclick = function(){
    ctx.lineCap = "round"

};

square.onclick = function(){
     ctx.lineCap = "square";
};







function changeSize (){
    ctx.lineWidth = brush.value;
}



let isDrawing = false;
ctx.strokeStyle = "blue"

function startDrawing(e){
    changeSize();
    isDrawing = true
    draw(e)
 }

 
 function endDrawing(){
    isDrawing = false
    ctx.beginPath()
 }
 
  
 function changeColor(color){
     
     ctx.strokeStyle = color

 }

function draw(e){
    if(!isDrawing){
        return
    }

    

    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    ctx.beginPath()
    ctx.moveTo(e.offsetX, e.offsetY)
}

canvas.addEventListener('mousedown', startDrawing)
canvas.addEventListener('mouseup', endDrawing)
canvas.addEventListener('mousemove', draw)