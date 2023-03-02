let score = 0;
let scoreElement = document.getElementById('score');
let holes = document.getElementsByClassName('hole');
let currentHole;

function moveMole(){

const number = Math.floor((Math.random()) * (holes.length -1)) + 0;
console.log(number)

currentHole = document.getElementById(`${number}`);


currentHole.classList.toggle('mole');
}

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) {
    if (clickEvent.target.matches('.mole')){
        score++; 
        scoreElement.innerText = `${score};`
        currentHole.classList.toggle('mole');
    }
    })

    
setInterval(moveMole, 1500)

