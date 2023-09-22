import styled from "@emotion/styled"
import { useState } from "react"
import { TransactionDetail } from "../pages/TransactionDetail"
import { getTransaction, deleteTransaction } from "../util/util"
import { useQuery, useMutation, QueryClient, useQueryClient } from '@tanstack/react-query';

const StyledDiv = styled.div`
  border: 1px solid black;
  display: flex;
  gap: 10px;
`
const Transaction = (props) => {

  const queryClient = useQueryClient()

  const { mutate, isLoading: isDeleteLoading, isError, error } = useMutation({
    mutationFn: deleteTransaction,
    onSuccess: () => queryClient.invalidateQueries({queryKey:['transactions']})
  }
    )

  const { id, type, category, amount, setTransactions } = props

  console.log('id props', id)

  const [showTransaction, setShowTransaction] = useState(false)

  return (
    <>
      <div>
        {/* Query loading state */}
        {/* {isQueryLoading && <p>Loading transactions...</p>} */}


        {
          <StyledDiv key={id}
          >

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
            {
              <button
                onClick={() => mutate(id)}
              >Delete</button>
            }
          </StyledDiv>

        }
      </div>
      {showTransaction ? <TransactionDetail idTransaction={id} setTransactions={setTransactions} /> : ""}

      {/* Loading state */}
      {isDeleteLoading && <p>Deleting transaction...</p>}

      {/* Error state */}
      {isError && <p>Error: {error.message}</p>}
    </>
  )
}

export { Transaction }