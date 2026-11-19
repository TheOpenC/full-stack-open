const button = document.querySelector('#submitButton')
const inputName = document.querySelector('#inputName')
const inputNum = document.querySelector('#inputNum')
const display = document.querySelector('#personData')
const date = document.querySelector('#submitDate')




button.addEventListener('click', ()=>{

    const newPerson = { 
    name: inputName.value, 
    number: inputNum.value
    
}
fetch('/api/persons', {
    method: 'POST',
    headers: {
        "Content-type": 'application/json'
    },
    body: JSON.stringify(newPerson)
})
.then(response => {

    console.log(`Status:`, response.status)
        if (response.status === 201){

        display.textContent += `
    Name: ${inputName.value}
    Phone: ${inputNum.value}
    ${new Date()}
    `

    console.log(`* * contact added * *
-
name: ${inputName.value}
number: ${inputNum.value}
${new Date()}
/// Sending to server:`, newPerson)

        } else if (response.status === 400){
            console.log('Bad Request')
        } else if (response.status === 500){
            console.log('Internal server error')
        }
    
    
})

  
})








