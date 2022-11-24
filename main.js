const board = document.querySelector('#board');
const colors = ['red', 'blue' , 'green' , 'yellow' , 'purple', "Orange", "Violet", "Indigo"]
const Squares_Number = 10 ;

for (let i = 0; i < Squares_Number; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
 square.addEventListener('mouseover' , ()=> setColor(square))
 square.addEventListener('mouseleave' , ()=> removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color ;
    element.style.boxShadow= `0 0 2px ${color} , 0 0 10px ${color}`; 
    element.style.transform = 'scale(1.7)';
    element.style.zIndex = '10';
    
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow= `0 0 2px #000`
    element.style.transform = 'scale(1)';
}

function getRandomColor(params) {
const index =  Math.floor(Math.random()*colors.length) 
return colors[index]
}






