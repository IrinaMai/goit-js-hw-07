function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//  console.log(bgColor);
  
    // document.body.style.background = bgColor;
}

const refs = {
 controlsInput: document.querySelector('.controls__input'),
 controlsBtnRender: document.querySelector('.controls__btn_render'),
 controlsBtnDestroy: document.querySelector('.controls__btn_destroy'),
 controlsBox: document.querySelector('.controls__box'),
}

// const controlsInput = document.querySelector('.controls__input');
// const controlsBtnRender = document.querySelector('.controls__btn_render');
// const controlsBtnDestroy = document.querySelector('.controls__btn_destroy');
// const controlsBox = document.querySelector('.controls__box');

console.log(refs.controlsInput.value);

const createBoxes = (amount) => {
    console.log(controlsInput.value);
    for (i = 0; i <= 100; i += 1) {
        `<div class="inner__box" width="10" heigh="10" style="background-color: red">*10</div>`
    }
};
    
    
controlsBox.innerHTML = `<div class="inner__box" width="10" heigh="10" style="background-color: red"></div>`



controlsBtnRender.addEventListener('click', createBoxes);

`<div width ='10' height= '10'></div>`