import { useState } from "react"
import { TransactionForm } from "./TransactionForm"

const AddTransaction = ({lastId,setLastId, setTransactions}) => {

    const handleAddTransaction = (newTransaction) => {

        // const newTransaction = {
        //     id: lastId + 1,
        //     type: type,
        //     category: category,
        //     amount: Number(amount)
        // }

        setTransactions(current => [...current, newTransaction])
        setLastId(current => current + 1)
    }

    return (
        <>
        <TransactionForm 
          idTransaction={null}
          lastId={lastId}
          handleTransaction={handleAddTransaction}
        />
        </>
    )

}

export { AddTransaction }