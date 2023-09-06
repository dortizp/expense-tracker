import { useEffect, useState } from "react"
import { getTransaction } from "../util/util"

const TransactionForm = ({idTransaction, lastId, handleTransaction}) => {
    const [transaction, setTransaction] = useState({
        id: lastId++,
        type: "expense",
        category: "food",
        amount: 0
    })

    useEffect(() => {
        if (idTransaction) {
            const {type, category, amount} = getTransaction(idTransaction)
            setTransaction({
                id: idTransaction,
                type: type,
                category: category,
                amount: amount
            })
        }
        console.log('new transaction',transaction)
    },[])

    return (
        <>
        <label>
            <input 
            type="text" 
            value={transaction.amount}
            onChange={(e) => setTransaction({...transaction, amount: Number (e.target.value)})}
            />
            amount
        </label>
        <select
          name="type"
          value={transaction.type}
          onChange={(e) => setTransaction({...transaction, type: (e.target.value)})}
        >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>
        <select
          name="category"
          value={transaction.category}
          onChange={(e) => setTransaction({...transaction, category: (e.target.value)})}
        >
            <option value="food">Food</option>
            <option value="doctor">Doctor</option>
        </select>
        <button
          onClick={()=>handleTransaction(transaction)}
        >
            Save
        </button>
        </>
    )
}

export { TransactionForm }