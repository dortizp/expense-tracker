import { Category } from "@mui/icons-material"
import { Transaction } from "./Transaction"

const TransactionList = ({data, setTransactions}) => {

    return (
        <>
            {
                (data && data.length > 0 && data.map( transaction => (
                    <Transaction 
                    key={transaction.id} 
                    id={transaction.id} 
                    type={transaction.type} 
                    category={transaction.category} 
                    amount={transaction.amount} 
                    setTransactions={setTransactions} />
                    )
                )
                )
            }
        </>
    )
}

export { TransactionList }