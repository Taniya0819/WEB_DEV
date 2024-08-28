
// const score0=document.querySelector('#score--0');
// const score1=document.querySelector('#score--1');
// const dice=document.querySelector('.dice');

// // const current0=document.querySelector('#current--0');

// const btnroll=document.querySelector('.btn--roll');
// const btnhold=document.querySelector('.btn--hold');

// let currentscore=0;

// function init()
// {
//     score0.textContent=0;
//     score1.textContent=0;
//     dice.classList.add('hidden')

// }
// init();

// btnroll.addEventListener('click',function(){
//     randomNo=Math.trunc(Math.random()*6+1);
//     // console.log(randomNo);
//     dice.classList.remove('hidden');

//     dice.src=dice-$(randomNo).png;

//     currentscore+=randomNo;
//     current0.textContent=currentscore;

//     document.querySelector('current--${activeplayer}').textContent=currentscore;
// })

// btnhold.addEventListener('click',function()){

// }; 


const score0=document.querySelector('#score--0');
const score1=document.querySelector('#score--1');

const dice=document.querySelector('.dice');



// const current0=document.querySelector('#current--0');

const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');

let currentscore=0;
let activeplayer=0;
let score;
let play=true;


function init()
{
    score=[0,0];
    score0.textContent=0;
    score1.textContent=0;
    dice.classList.add('hidden');
}
init();
function switchPlayer()
{
    currentscore=0;
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
    activeplayer=activeplayer==0?1:0;
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
}

btnroll.addEventListener('click',function(){
    if(play){
    randNo=Math.trunc(Math.random()*6+1);
    // console.log(randNo);
    dice.classList.remove('hidden');
    dice.src=`dice-${randNo}.png`;
    if(randNo!=1){
        currentscore+=randNo;
    // current0.textContent=currentscore;
    // document.querySelector('#current--0').textContent=currentscore;
    document.querySelector(`#current--${activeplayer}`).textContent=currentscore;

    }
    else{
        switchPlayer();
    }
}

})

btnhold.addEventListener('click',function(){
    if(play){
    score[activeplayer]+=currentscore;
    document.querySelector('#score--${activeplayer}').textContent=score[activeplayer];

    if(score[activeplayer]>=20){
        document.querySelector('.player--${activeplayer}').classList.add('player--winner');
                          
    }
    else{
        switchPlayer();
    }
})