import { useState } from 'react'

function TransactionList({ transactions, onDeleteTransaction }) {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = filter === 'all' || transaction.type === filter
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }

  const formatAmount = (amount, type) => {
    const formatted = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(parseFloat(amount))
    return type === 'income' ? `+${formatted}` : `-${formatted}`
  }

  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>
      
      <div className="filters">
        <div className="filter-group">
          <label>Filter by type:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredTransactions.length === 0 ? (
        <p className="no-transactions">No transactions found</p>
      ) : (
        <div className="transactions">
          {filteredTransactions.map(transaction => (
            <div key={transaction.id} className={`transaction-item ${transaction.type}`}>
              <div className="transaction-info">
                <div className="transaction-header">
                  <span className="description">{transaction.description}</span>
                  <span className={`amount ${transaction.type}`}>
                    {formatAmount(transaction.amount, transaction.type)}
                  </span>
                </div>
                <div className="transaction-details">
                  <span className="category">{transaction.category}</span>
                  <span className="date">{formatDate(transaction.date)}</span>
                </div>
              </div>
              <button 
                className="delete-btn"
                onClick={() => onDeleteTransaction(transaction.id)}
                title="Delete transaction"
              >
                🗑️
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TransactionList