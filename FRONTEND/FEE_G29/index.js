
console.log('Hello World!!');
const display=document.getElementsByClassName('display')[0];

//add to display()
//clear screen()
//calculate()
//delLast()

//add
function addToDisplay(val){
    display.value+=val;
}

//clear screen
function clrscr(){
    display.value='';
}

//calculate
function calculate(){
    display.value=eval(display.value);
}

//delLast
function delLast(){
    let str='';
    for(i=0;i<(display.length-1);i++){
        str+=display.value[i];
    }
    display.value=str;
}