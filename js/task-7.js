const inputRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text')


const changeFontSize = (e) => {
spanRef.style = `font-size: ${e.target.value}px`
};


inputRef.addEventListener('input', changeFontSize)  