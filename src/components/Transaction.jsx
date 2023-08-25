import styled from "@emotion/styled"

const StyledDiv = styled.div`
  border: 1px solid black;
  display: flex;
  gap: 10px;
`
const Transaction = ({props}) => {


    const {id, type, category, amount} = props
    

    return (
        <>
          <div>
            <StyledDiv key={id}>
                {/* <p>
                    <span>type : </span>
                    <span>{type}</span>
                </p> */}
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
        </>
    )
}

export { Transaction }