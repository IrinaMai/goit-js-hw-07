
const inputRef = document.querySelector('#name-input')
const nameValurRef = document.querySelector('#name-output')


inputRef.addEventListener('input', handelChangeName);

function handelChangeName() {
    nameValurRef.textContent = inputRef.value
}