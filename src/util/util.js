// import { transactions } from "../data"

const port = "9000"
const host = "http://localhost"

export async function getTransaction (id) {
    const endpoint = "transaction"
    const url = `${host}:${port}/${endpoint}/${id}`
    const response = await fetch(url)
    const transactionList = await response.json()
    // const transaction = transactionList[0]

    return transaction

}

export async function getTransactions() {
    const endpoint = "transactions"
    const url = `${host}:${port}/${endpoint}`  
    const response = await fetch(url)
    const transactions = await response.json()

    return transactions
}

export async function deleteTransaction(id) {
    const endpoint = "transaction"
    const url = `${host}:${port}/${endpoint}/${id}`  
    const response = await fetch(url,{method: 'DELETE'})

    return response 

}