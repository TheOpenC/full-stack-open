


function flipCoin() {
    let coin = Math.floor(Math.random()* 2) +1
    return coin < 2 ? `heads: ${coin}` : `tails: ${coin}` 
}

console.log(flipCoin(), )

