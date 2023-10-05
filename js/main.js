/*sm8*/ 

let inputName = document.querySelector('.inputName');
let inputYear = document.querySelector('.inputYear');
let btn = document.querySelector('.btn');
let errName = document.querySelector('.errorName');
let errYear = document.querySelector('.errorYear');
let errorReg = document.querySelector('.errorReg');
let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('.menu');


menuBtn.addEventListener('click',function(event){
    menu.classList.toggle('show');
    event.preventDefault();

})

let regForm = document.querySelector('.reg');


reg = /[A-Za-zA-яА-яЁё]/g;

log = true;

inputYear.oninput = function(){
    this.value = this.value.replace(reg, '')
}

const currentYear = new Date().getFullYear();
console.log(currentYear)

regForm.addEventListener('keyup', function(){
    if(inputName.value.length < 2 ){
        inputName.style.border = "2px solid #dc7137";
        errName.innerHTML = `<p class="error">*Введите не менее 2 символов</p>`;
        log = false;

    }else{
        inputName.style.border = "2px solid #AE9961";
        errName.innerHTML = ``;
        log = true;
    }

    if(inputYear.value.length < 4 || inputYear.value.length > 4 ){
        inputYear.style.border = "2px solid #dc7137";
        errYear.innerHTML = `<p class="error">*Введите год, 4 цифры</p>`;
        log = false;
    }else if(currentYear-inputYear.value < 18){
        inputYear.style.border = "2px solid #dc7137";
        errYear.innerHTML = `<p class="error">*Вам меньше 18, подрастите и приходите позже</p>`;
        log = false;


    }else{
        inputYear.style.border = "2px solid #AE9961";
        errYear.innerHTML = ``;
        log = true;
    }

/*  */
    
    
})




btn.onclick = function(event){
    if (inputName.value.length === 0){
        log = false;
        errName.innerHTML =`<p class="error">*Введите имя</p>`;

    }
    if (inputYear.value.length === 0){
        log = false;
        errYear.innerHTML =`<p class="error">*Введите год</p>`;
    }

    event.preventDefault();

    if(log == true){
        inputName.value = '';
        inputYear.value = '';
    }

}


/*end*/

