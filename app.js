let count = 0;

const value = document.querySelector('#value');
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

increase.addEventListener("click", function(e){
    const actions = e.currentTarget.classList;
    if(actions.contains('increase')){
        count++;
    }
    value.textContent = count;
})

reset.addEventListener("click", function(e){
    const actions = e.currentTarget.classList;
    if(actions.contains('reset')){
        count = 0;
    }
    value.textContent = count;
})

decrease.addEventListener("click", function(e){
    const actions = e.currentTarget.classList;
    if(actions.contains("decrease")){
        count--;
    }
    value.textContent = count;
})