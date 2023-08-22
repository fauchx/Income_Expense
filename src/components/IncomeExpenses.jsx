import { useGlobalState } from "../context/globalState"

function IncomeExpenses() {
    const {transactions} = useGlobalState()
    const amount = transactions.map(transaction => transaction.amount)
    const income = amount.filter(itm => itm>0).reduce((acc,itm) => (acc+=itm), 0).toFixed(2)
    const expense = amount.filter(itm => itm< 0).reduce((acc,itm) => (acc+=itm), 0).toFixed(2)*-1

  return (
    <div >
        <div className="flex justify-between my-2">
            <p>Income</p>
            {income}
        </div>
        <div className="flex justify-between my-2">
            <p>Expense</p>
            {expense}
        </div>
    </div>
  )
}

export default IncomeExpenses