import { useState } from 'react'

const CATEGORIES = {
  income: ['Salary', 'Freelance', 'Investment', 'Gift', 'Other Income'],
  expense: ['Food', 'Transport', 'Entertainment', 'Shopping', 'Bills', 'Healthcare', 'Education', 'Other Expense']
}

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    type: 'expense',
    amount: '',
    category: 'Food',
    description: '',
    date: new Date().toISOString().split('T')[0]
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.amount || !formData.description) {
      alert('Please fill in all fields')
      return
    }
    
    onAddTransaction(formData)
    setFormData({
      type: 'expense',
      amount: '',
      category: 'Food',
      description: '',
      date: new Date().toISOString().split('T')[0]
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset category when type changes
      ...(name === 'type' && { category: CATEGORIES[value][0] })
    }))
  }

  return (
    <div className="transaction-form">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Type</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="type"
                value="income"
                checked={formData.type === 'income'}
                onChange={handleChange}
              />
              Income
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="expense"
                checked={formData.type === 'expense'}
                onChange={handleChange}
              />
              Expense
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            {CATEGORIES[formData.type].map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description..."
            required
          />
        </div>

        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Transaction
        </button>
      </form>
    </div>
  )
}

export default TransactionForm