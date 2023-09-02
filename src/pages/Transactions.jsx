import { useState, useEffect } from "react"
import { TransactionList } from "../components/TransactionList"
import { Title } from "../components/Title"
import Balance from "../components/Balance"


// transactions && console.log (transactions)

const Transactions = ({transactions}) => {

    const [toggleTransactionType, setToggleTransactionType] = useState("")

    const expenses = transactions.filter(transaction => transaction.type === "expense")
    const incomes  = transactions.filter(transaction => transaction.type === "income")

    const handleToggleTransactionType = () => {
        console.log('cick', toggleTransactionType)
        console.log('transactions', expenses)
        console.log('transactions', incomes)

        if (toggleTransactionType === "expenses") setToggleTransactionType("incomes")

        if (toggleTransactionType === "incomes") setToggleTransactionType("expenses")

    }

    useEffect (() => {
        setToggleTransactionType("expenses")

    },[])


    return (
        <>
        <Title />
        <button
          onClick={handleToggleTransactionType}
        >
            {toggleTransactionType}
        </button>
        { toggleTransactionType && toggleTransactionType === "expenses" && 
            <TransactionList props={expenses} />
        }

        { toggleTransactionType && toggleTransactionType === "incomes" &&
            <TransactionList props={incomes} />
        }

        <Balance transactions={transactions}/>
        </>
    )
}

export { Transactions }