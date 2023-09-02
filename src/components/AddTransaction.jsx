import { useState } from "react"

const AddTransaction = ({lastId,setLastId, setTransactions}) => {
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState("expense")
    const [category, setCategory] = useState("food")

    const handleAddTransaction = () => {

        const newTransaction = {
            id: lastId + 1,
            type: type,
            category: category,
            amount: Number(amount)
        }

        setTransactions(current => [...current, newTransaction])
        setLastId(newTransaction.id)
    }

    return (
        <>
        <label>
            <input 
            type="text" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
            amount
        </label>
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
            <option value="food">Food</option>
            <option value="doctor">Doctor</option>
        </select>
        <button
          onClick={handleAddTransaction}
        >
            Save
        </button>
        </>
    )

}

export { AddTransaction }