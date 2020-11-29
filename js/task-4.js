// const counterRef = document.querySelector('#counter')
const counter = document.querySelector('#value')
const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')
// console.log(btnIncrement);
 let counterValue = 0;


const handleIncrement = () => {
    counterValue += 1;
    counter.textContent = counterValue 
};

const handleDecrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue 
};

btnDecrement.addEventListener('click', handleDecrement);
btnIncrement.addEventListener('click', handleIncrement);

