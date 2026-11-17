const button = document.querySelector('#submitButton')
const inputId = document.querySelector('#inputId')
const inputName = document.querySelector('#inputName')
const inputNum = document.querySelector('#inputNum')
const display = document.querySelector('#personData')



button.addEventListener('click', ()=>{
    console.log(`
        id: ${inputId.value}
        name: ${inputName.value} 
        number: ${inputNum.value}
        `
    )
})


alert('working')