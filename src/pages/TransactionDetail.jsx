import { TransactionForm } from "../components/TransactionForm"
import { getTransaction } from "../util/util"

const TransactionDetail = (props) => {
    const {idTransaction, setTransactions} = props
    const {type, category, amount} = getTransaction(idTransaction)

    const EditTransaction = (newTransaction) => {
        console.log('edit')

        setTransactions(transactions => transactions.map ( transaction => {
            if (transaction.id === newTransaction.id) {
                return {
                    id: newTransaction.id,
                    type: newTransaction.type,
                    category: newTransaction.category,
                    amount: newTransaction.amount
                }
            }
            return transaction
        }))

    }

    return (
        <>
        <TransactionForm
        idTransaction={idTransaction}
        lastId={null}
        handleTransaction={EditTransaction}
        />

        {/* <h2>Transaction Detail</h2>
        Type : {transaction.type}
        Category : {transaction.category}
        Amount: {transaction.amount}
        */}

 
        </>
    )
}

export { TransactionDetail }