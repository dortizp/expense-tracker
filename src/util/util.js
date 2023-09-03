import { transactions } from "../data"

export function getTransaction (id) {
    const result = transactions.filter( transaction => transaction.id === id)

    if (result) return result[0]
}

export function getTransactions() {
    return new Promise((resolve, reject) => {
        resolve(transactions)
    })
}