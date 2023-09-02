import { transactions } from "../data";

const Balance = () => {
    const expenses = 
      transactions
      .filter(e => e.type === "expense")
      .reduce((acc,i) => acc + i.amount, 0)

    console.log(`expenses: ${expenses}`)

    const incomes = 
      transactions
      .filter(e => e.type === "income")
      .reduce((acc,i) => acc + i.amount, 0)

    console.log(`incomes: ${incomes}`)
    return (
        <>
        Balance $ {incomes - expenses}
        </>
    )

}

export default Balance