
const inputRef = document.querySelector('#name-input')
const nameValurRef = document.querySelector('#name-output')


inputRef.addEventListener('input', handelChangeName);

function handelChangeName() {
    if (!inputRef.value.length) {
        nameValurRef.textContent = 'незнакомец';
    } else {
        nameValurRef.textContent = inputRef.value;
    }
}