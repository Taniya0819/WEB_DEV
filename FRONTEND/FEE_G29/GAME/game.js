document.getElementById('message').textContent='Game Started';
let randomno=Math.trunc(Math.random()*20)+1;
console.log(randomno)
let score=20;
let highscore=0;
function startGame()
{
    let guessno=document.querySelector('.guess').value; 

    if(randomno==guessno)
    {
        document.getElementById('message').textContent='You Won';
        document.querySelector('body').style.backgroundColor='green';
    }
    elseif(guessno>randomno)
    {
        score--;
        document.getElementById('message').textContent='Too high';
        document.querySelector('.score').textContent=score;
    }
}

function resetGame()
{
    score=20;
    let randomno=Math.trunc(Math.random()*20)+1;
    console.log()
    document.querySelector('body').style.backgroundColor='#000';
    document.querySelector('.score').textContent=score;
    document.getElementById('message').textContent='Start Guessing';
    document.querySelector('.guess').value='';

}
