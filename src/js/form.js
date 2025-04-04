const btnSubmit = document.getElementById('submit');
const inputs = document.querySelectorAll('input');
const list = document.querySelectorAll('li');

inputs.forEach((input, counter)  => {
    input.addEventListener('change', ()=> {
        if(input.value !== '') {
            list[counter].classList.remove('required-field')
            list[counter].classList.add('validated-field')
        } else {
            list[counter].classList.remove('validated-field')
        }
    })
})

btnSubmit.addEventListener('click', (event)=> {
    
    inputs.forEach((input, counter)  => {
        if(input.value === '') {
            event.preventDefault();
            list[counter].classList.add('required-field')
        } else {
            list[counter].classList.remove('required-field')
            list[counter].classList.add('validated-field')
        }
    })
})