import styled from "@emotion/styled"
import { useState } from "react"
import { TransactionDetail } from "../pages/TransactionDetail"

const StyledDiv = styled.div`
  border: 1px solid black;
  display: flex;
  gap: 10px;
`
const Transaction = (props) => {


    const {id, type, category, amount, setTransactions } = props

    const [showTransaction, setShowTransaction] = useState(false)


    return (
        <>
          <div>
            <StyledDiv key={id}
            >
                {/* <p>
                    <span>type : </span>
                    <span>{type}</span>
                </p> */}
                <button
                  onClick={() => {
                    setShowTransaction(current => !current)
                    console.log(id, showTransaction)
                  }}
                >
                {
                  !showTransaction
                  ? "show"
                  : "close"
                }
                </button>
                <p>
                    <span>category : </span>
                    <span>{category}</span>
                </p>
               <p>
                    <span>amount : </span>
                    <span>{amount}</span>
                </p>
            </StyledDiv>
          </div>
          { showTransaction ? <TransactionDetail idTransaction={id} setTransactions={setTransactions}/> : "" }
        </>
    )
}

export { Transaction }