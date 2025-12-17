import { useState, useEffect } from 'react'
import './App.css'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import Dashboard from './components/Dashboard'

function App() {
  const [transactions, setTransactions] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')

  // Load transactions from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('transactions')
    if (saved) {
      setTransactions(JSON.parse(saved))
    }
  }, [])

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    }
    setTransactions([newTransaction, ...transactions])
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0)

  const balance = totalIncome - totalExpenses

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Expense Tracker</h1>
        <nav className="nav-tabs">
          <button 
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={activeTab === 'add' ? 'active' : ''}
            onClick={() => setActiveTab('add')}
          >
            Add Transaction
          </button>
          <button 
            className={activeTab === 'history' ? 'active' : ''}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
        </nav>
      </header>

      <main className="app-main">
        {activeTab === 'dashboard' && (
          <Dashboard 
            transactions={transactions}
            totalIncome={totalIncome}
            totalExpenses={totalExpenses}
            balance={balance}
          />
        )}
        
        {activeTab === 'add' && (
          <TransactionForm onAddTransaction={addTransaction} />
        )}
        
        {activeTab === 'history' && (
          <TransactionList 
            transactions={transactions}
            onDeleteTransaction={deleteTransaction}
          />
        )}
      </main>
    </div>
  )
}

export default App
