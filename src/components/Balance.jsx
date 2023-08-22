import { useGlobalState } from '../context/globalState'
function Balance() {
  const {transactions} = useGlobalState()
  const montos = transactions.map(transaction => transaction.amount)
  const total = montos.reduce((acc, itm) => (acc += itm), 0)
  return (
    <div className='flex justify-between'>
        <h3>Balance</h3>
        <h1 className='text-2xl font-bold'>${total}</h1>
        
    </div>
  )
}

export default Balance