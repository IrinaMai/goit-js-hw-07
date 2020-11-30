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


refs.controlsBtnRender.addEventListener('click', onBtnClick)
    
function onBtnClick() {
    console.log(refs.controlsInput.value);
}