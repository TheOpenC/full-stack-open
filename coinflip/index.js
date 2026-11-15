import express from 'express';

const app = express()
let heads = 0
let tails = 0

function coinFlip(){
    
    let coin = Math.floor(Math.random() * 2) + 1
    return coin < 2 ? (heads++, `heads, ${heads}`) : (tails++,`tails, ${tails}`)     
}
app.get('/info', (request, response) => {
// record flips
   response.send(`
    Heads: ${heads}
    Tails: ${tails} 
    `
   )
})
app.post('/api/flip', (request, response) => {
    response.send(coinFlip())
})

const PORT = 3001

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

