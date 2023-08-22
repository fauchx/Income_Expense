import {GlobalProvider} from "../src/context/globalState"
import Balance from "./components/Balance"
import ExpenseChart from "./components/ExpenseChart"
import TransactionList from "./components/Transaction/TransactionList"
import Transation from "./components/Transaction/Transation"
import IncomeExpenses from "./components/IncomeExpenses"

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-1/2">
        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2" >
          <div className="">
            <h1 className="text-4xl font-bold"> Expense Tracker</h1>
            <IncomeExpenses/>
            <Balance/>
            <Transation/>
          </div>
          <div className=" flex-col flex ">
            <ExpenseChart/>
            <TransactionList/>
          </div>
        </div>
        </div>
      </div>
      
    </GlobalProvider>
  )
}


export default App
