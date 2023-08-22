import {VictoryPie, VictoryLabel} from "victory"
import { useGlobalState } from "../context/globalState"

function ExpenseChart() {
    const {transactions } = useGlobalState();
    
    const totalIncome = transactions.filter(trm => trm.amount>0).reduce((acc,transactions)=> (acc+=transactions.amount), 0)
    const totalExpense = transactions.filter(trm => trm.amount<0).reduce((acc,transactions)=> (acc+=transactions.amount), 0)*-1
    
    const totalExpensePercentage = Math.round((totalExpense/totalIncome)* 100)
    const totalIncomePercentage = 100-totalExpensePercentage
  return (
    <VictoryPie
    colorScale={["#FF0000","#00bb2d"]}
    animate={
        {
            duration:200
        }
    }
    labels={({datum })=> datum.y}
  data={[
    { x: "Expenses", y: totalExpensePercentage},
    { x: "Income", y: totalIncomePercentage },
  ]}
  labelComponent={<VictoryLabel
    angle={45}
    style={
        {
            fill: "white",
        }
    }
  />}
/>
  )
}

export default ExpenseChart