import { getTransaction } from "../util/util"

const TransactionDetail = ({transactionId}) => {
    const transaction = getTransaction(transactionId)

    return (
        <>
        <h2>Transaction Detail</h2>
        Type : {transaction.type}
        Category : {transaction.category}
        Amount: {transaction.amount}
        </>
    )
}

export { TransactionDetail }