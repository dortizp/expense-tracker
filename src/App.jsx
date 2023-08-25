import './App.css'
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import ButtonTest from './components/ButtonTest';
import CardTest from './components/CardTest';
import TextTest from './components/TextTest';
import TabTest from "./components/TabTest"
import { Transactions } from './pages/Transactions';


function App() {

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
      <Transactions/>
    </>
  )
}

export default App
