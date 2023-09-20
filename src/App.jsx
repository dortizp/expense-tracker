import './App.css'
import { useState, useEffect } from "react"
import { Transactions } from './pages/Transactions';
import { AddTransaction } from './components/AddTransaction';
import { getTransactions } from './util/util';
import { useQuery } from '@tanstack/react-query';



function App() {

  const [lastId, setLastId] = useState(0)
  const [page, setPage] = useState(0)
  const pageSize = 10

  const { isLoading, data, error, refetch } = useQuery(
    {
      queryKey: ['transactions', page, pageSize],
      queryFn: () => getTransactions(page, pageSize)
    }
  )

  const setTransactionList = () => console.log('set data')

  useEffect(() => {
    // This effect will run whenever the page changes.
    // You can use it to refetch the data when the page changes.
    refetch();
  }, [page, refetch]);

  if (isLoading) return "Loading..."

  if (error) return 'An error has occurred: ' + error.message

  const PageButtons = () => {
    return (
      <div>
        <button onClick={() => setPage(current => current - 1)}>-</button>
        {page}
        <button onClick={() => setPage(current => current + 1)}>+</button>
      </div>
    )
  }

  return (
    <>
      <AddTransaction lastId={lastId} setLastId={setLastId} setTransactions={setTransactionList} />
      <PageButtons />
      <Transactions transactions={data} setTransactions={setTransactionList} />
    </>

  )
}

export default App
