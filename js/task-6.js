const inputRef = document.querySelector('#validation-input');

const handlInputValidation = (e) => {
    if (e.target.value.length === 6) {
        inputRef.classList.replace('invalid', 'valid')
    } else {
       inputRef.classList.add('invalid')
    }
    console.log(e.target.value.length);
  
};

inputRef.addEventListener('input', handlInputValidation);
    



