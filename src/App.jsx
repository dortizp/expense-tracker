import './App.css'
import { useEffect, useState } from "react"
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import ButtonTest from './components/ButtonTest';
import CardTest from './components/CardTest';
import TextTest from './components/TextTest';
import TabTest from "./components/TabTest"
import { Transactions } from './pages/Transactions';
import { AddTransaction } from './components/AddTransaction';
import { getTransactions } from './util/util';


function App() {

  const [lastId, setLastId] = useState(0)
  const [transactionList, setTransactionList] = useState([])

  useEffect(()=> {

    const loadTransactions = async () => {
      const response = await getTransactions()
      setTransactionList(response)
      setLastId(response.length)
      console.log('got transactions')
      console.log(`last id: ${response.length}`)
    }

    loadTransactions()
  },[])


  return (
    // <CssVarsProvider>
    //   <Sheet 
    //     sx={{
    //     width: 300,
    //     mx: 'auto', // margin left & right
    //     my: 4, // margin top & bottom
    //     py: 3, // padding top & bottom
    //     px: 2, // padding left & right
    //     display: 'flex',
    //     flexDirection: 'column',
    //     gap: 2,
    //     borderRadius: 'sm',
    //     boxShadow: 'md'}}

    //   >
    //     <ButtonTest/>
    //     <CardTest />
    //     <TextTest />
    //     <TabTest />

    //   </Sheet>
    // </CssVarsProvider>
    <>
      <AddTransaction lastId={lastId} setLastId={setLastId} setTransactions={setTransactionList}/>
      <Transactions transactions={transactionList}/>
    </>

  )
}

export default App
