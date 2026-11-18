const button = document.querySelector('#submitButton')
// const inputId = document.querySelector('#inputId')
const inputName = document.querySelector('#inputName')
const inputNum = document.querySelector('#inputNum')
const display = document.querySelector('#personData')
const date = document.querySelector('#submitDate')


button.addEventListener('click', ()=>{
    console.log(`(Contact Added)
name: ${inputName.value}
number: ${inputNum.value}
${new Date()}`)

    display.textContent += `
    Name: ${inputName.value}
    Phone: ${inputNum.value}
    ${new Date()}
    `
})

fetch('/api/persons', {
    method: 'POST'
})




