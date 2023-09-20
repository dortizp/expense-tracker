import { transactions } from "../data"

const port = "9000"
const host = "http://localhost"


export function getTransaction (id) {
    const result = transactions.filter( transaction => transaction.id === id)

    if (result) return result[0]
}

export async function getTransactions() {
    // return new Promise((resolve, reject) => {
    //     resolve(transactions)
    // })
    const endpoint = "transactions"
    const url = `${host}:${port}/${endpoint}`  
    const response = await fetch(url)
    const transactions = await response.json()

    return transactions
}