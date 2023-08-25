import { Transaction } from "./Transaction"

const TransactionList = ({props}) => {
    const data = props

    return (
        <>
            {
                (data && data.length > 0 && data.map( transaction => (
                    <Transaction key={transaction.id} props={transaction} />
                    )
                )
                )
            }
        </>
    )
}

export { TransactionList }