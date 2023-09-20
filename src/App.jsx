import './App.css'
import { useState } from "react"
import { Transactions } from './pages/Transactions';
import { AddTransaction } from './components/AddTransaction';
import { getTransactions } from './util/util';
import { useQuery } from '@tanstack/react-query';



function App() {

  const [lastId, setLastId] = useState(0)

  const { isLoading, data, error } = useQuery(
    {
      queryKey: ['transactions'],
      queryFn: getTransactions
    }
  )

  const setTransactionList = () => console.log('set data')

  if (isLoading) return "Loading..."

  if (error) return 'An error has occurred: ' + error.message


  return (
    <>
      <AddTransaction lastId={lastId} setLastId={setLastId} setTransactions={setTransactionList} />
      <Transactions transactions={data} setTransactions={setTransactionList} />
    </>

  )
}

export default App
