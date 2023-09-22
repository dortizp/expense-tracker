import { useState, useEffect } from "react"
import { TransactionList } from "../components/TransactionList"
import { Title } from "../components/Title"
import Balance from "../components/Balance"


// transactions && console.log (transactions)

const Transactions = ({ transactions, setTransactions }) => {

    const [toggleTransactionType, setToggleTransactionType] = useState("expenses")

    const expenses = transactions.filter(transaction => transaction.type === "expense")
    const incomes = transactions.filter(transaction => transaction.type === "income")

    const handleToggleTransactionType = () => {
        console.log('cick', toggleTransactionType)
        console.log('x expenses', expenses)
        console.log('incomes', incomes)

        if (toggleTransactionType === "expenses") setToggleTransactionType("incomes")

        if (toggleTransactionType === "incomes") setToggleTransactionType("expenses")

    }

    useEffect(() => {
        setToggleTransactionType("expenses")

    }, [])


    return (
        <>
            <Title />
            <button
                onClick={handleToggleTransactionType}
            >
                {toggleTransactionType}
            </button>
            {toggleTransactionType && toggleTransactionType === "expenses" &&
                <TransactionList data={expenses} setTransactions={setTransactions} />
            }

            {toggleTransactionType && toggleTransactionType === "incomes" &&
                <TransactionList data={incomes} setTransactions={setTransactions} />
            }

            <Balance transactions={transactions} />
        </>
    )
}

export { Transactions }