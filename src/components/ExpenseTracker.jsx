import React, { useState } from 'react'
import Theme from './Theme'

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addExpense = () => {
    if (!amount || !description) return;
    setExpenses([...expenses, { amount, description, id: Date.now() }]);
    setAmount("");
    setDescription("");
  };
  const total = expenses.reduce((sum, e) => sum + parseFloat(e.amount), 0);

  return (
    <div className='min-h-screen p-6 bg-bg text-text transition-colors'>
      <h1 className='text-3xl font-bold text-center mb-4'>Expense Tracker</h1>
      <Theme />
      <div className='card mx-auto mt-8 max-w-md'>
        <h2 className='text-xl font-semibold mb-4'>Add Expense</h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder='Amount' className='px-3 py-2 border rounded' />
          <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='description' className='px-3 py-2 border rounded '></input>
        </div>
        <div className="flex justify-center mt-4">
            <button onClick={addExpense} className="btn w-36">
                Add
            </button>
        </div>
      </div>
      <div className='card mx-auto mt-6 max-w-md'>
        <h2 className='text-xl font-semibold mb-2'>Expenses</h2>
        <ul>
          {expenses.map((e) => (
            <li className='flex justify-around border py-2 px-1' key={e.id}>
              <span>{e.description}</span>
              <span className='text-semibold text-amber-700'>{" "}${e.amount}{" "}</span>
            </li>
          ))}
        </ul>
        <div className='mt-4 font-bold text-lg'>Total: {total}</div>
      </div>
    </div>
  )
}

export default ExpenseTracker
