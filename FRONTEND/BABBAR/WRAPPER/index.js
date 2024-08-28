// access element
const countVal=document.querySelector('#counter');
// parseInt to convert string into int 
const increment=()=>{
    // getz the value from UI
    let val=parseInt(countVal.innerText);
    // update the value
    val=val+1;
    // set the value to UI
    countVal.innerText=val;
};

function decrement() {
    let val=parseInt(countVal.innerText);
    val=val-1;
    countVal.innerText=val;
};