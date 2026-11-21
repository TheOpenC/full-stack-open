const button = document.querySelector('#submitButton')
const inputName = document.querySelector('#inputName')
const inputNum = document.querySelector('#inputNum')
const display = document.querySelector('#personData')
const date = document.querySelector('#submitDate')




button.addEventListener('click', ()=>{
 const contentTest = inputName.value && inputNum.value ? true : false

 if (contentTest) {
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

            display.innerHTML += `
        Name: ${inputName.value}
        Phone: ${inputNum.value}
        ${new Date()}<br>
        `

        console.log(`* * contact added * * *
    -
    name: ${inputName.value}
    number: ${inputNum.value}
    ${new Date()}
    /// Sending to server:`, newPerson)

            } else if (response.status === 400){
                display.innerHTML += `Bad Request, status: ${response.status} x X x X<br>`
                console.log('Bad request')
            } else if (response.status === 409){
                display.innerHTML += `Person exists, status: ${response.status} x X x X<br>`
                console.log('Person exists')
            } else if (response.status === 500){
                display.innerHTML += `Internal server error, status: ${response.status} x X x X<br>`
                console.log('Internal server error')
            } 
        
        
    })
} else {
    console.log('content for name or number is missing.')
}
  
})








