const inputRef = document.querySelector('#validation-input');

const handlInputValidation = (e) => {
       if (e.target.value.length == e.target.dataset.length) {
        inputRef.classList.replace('invalid', 'valid')
    } else {
       inputRef.classList.add('invalid')
    }
};

inputRef.addEventListener('input', handlInputValidation);
    



