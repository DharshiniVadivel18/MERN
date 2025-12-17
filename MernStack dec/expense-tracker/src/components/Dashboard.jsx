function Dashboard({ transactions, totalIncome, totalExpenses, balance }) {
  // Get expense breakdown by category
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, transaction) => {
      acc[transaction.category] = (acc[transaction.category] || 0) + parseFloat(transaction.amount)
      return acc
    }, {})

  // Get recent transactions (last 5)
  const recentTransactions = transactions.slice(0, 5)

  // Get monthly data for the last 6 months
  const getMonthlyData = () => {
    const months = []
    const now = new Date()
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
      const monthName = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
      
      const monthTransactions = transactions.filter(t => {
        const transactionMonth = t.date.substring(0, 7)
        return transactionMonth === monthKey
      })
      
      const monthIncome = monthTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0)
      
      const monthExpenses = monthTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + parseFloat(t.amount), 0)
      
      months.push({
        month: monthName,
        income: monthIncome,
        expenses: monthExpenses
      })
    }
    
    return months
  }

  const monthlyData = getMonthlyData()

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount)
  }

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card income-card">
          <h3>Total Income</h3>
          <p className="amount">{formatCurrency(totalIncome)}</p>
        </div>
        <div className="card expense-card">
          <h3>Total Expenses</h3>
          <p className="amount">{formatCurrency(totalExpenses)}</p>
        </div>
        <div className={`card balance-card ${balance >= 0 ? 'positive' : 'negative'}`}>
          <h3>Balance</h3>
          <p className="amount">{formatCurrency(balance)}</p>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Expense Breakdown */}
        <div className="chart-section full-width">
          <h3>Expenses by Category</h3>
          {Object.keys(expensesByCategory).length > 0 ? (
            <div className="category-breakdown">
              {Object.entries(expensesByCategory)
                .sort(([,a], [,b]) => b - a)
                .map(([category, amount]) => {
                  const percentage = ((amount / totalExpenses) * 100).toFixed(1)
                  return (
                    <div key={category} className="category-item">
                      <div className="category-info">
                        <span className="category-name">{category}</span>
                        <span className="category-amount">{formatCurrency(amount)}</span>
                      </div>
                      <div className="category-bar">
                        <div 
                          className="category-fill" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="category-percentage">{percentage}%</span>
                    </div>
                  )
                })
              }
            </div>
          ) : (
            <p className="no-data">No expense data available</p>
          )}
        </div>

        {/* Monthly Overview */}
        <div className="chart-section full-width">
          <h3>Monthly Overview</h3>
          <div className="monthly-chart">
            {monthlyData.map((month, index) => (
              <div key={index} className="month-item">
                <div className="month-name">{month.month}</div>
                <div className="month-bars">
                  <div className="bar-container">
                    <div className="bar income-bar" style={{ height: `${Math.max(month.income / 1000 * 100, 5)}px` }}></div>
                    <span className="bar-label">Income</span>
                  </div>
                  <div className="bar-container">
                    <div className="bar expense-bar" style={{ height: `${Math.max(month.expenses / 1000 * 100, 5)}px` }}></div>
                    <span className="bar-label">Expenses</span>
                  </div>
                </div>
                <div className="month-amounts">
                  <div className="income-amount">{formatCurrency(month.income)}</div>
                  <div className="expense-amount">{formatCurrency(month.expenses)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="recent-section full-width">
          <h3>Recent Transactions</h3>
          {recentTransactions.length > 0 ? (
            <div className="recent-transactions">
              {recentTransactions.map(transaction => (
                <div key={transaction.id} className={`recent-item ${transaction.type}`}>
                  <div className="recent-info">
                    <span className="recent-description">{transaction.description}</span>
                    <span className="recent-category">{transaction.category}</span>
                  </div>
                  <div className="recent-amount">
                    {transaction.type === 'income' ? '+' : '-'}{formatCurrency(parseFloat(transaction.amount))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No transactions yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard