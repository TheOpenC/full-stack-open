const express = require('express')

const app = express()
app.use(express.json())

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456",
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345",
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
    }
]
let nextId = 5


app.get('/api/persons', (request, response) => {
    response.json(persons)
})


app.get('/info', (request, response) => {
       
     response.send(`
        <p>
        Phonebook has info for ${persons.length} people.</p
        <br>
        ${new Date()}
        `)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    let person = persons.find(person => person.id == id)
    if (person == undefined ) {
        person = `
            <p>
            Person does not exist. Total number of people is ${persons.length}</p>`
        response.send(person)
    }

    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    
    const name = request.body.name
    const number = request.body.number
    class Person {
        
        constructor(id, name, number){
            this.id = id
            this.name = name
            this.number = number
        }
    }
    const person = new Person(String(nextId), name, number)
    nextId ++
    persons = persons.concat(person)
    response.status(201).json(person)

})


    


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)