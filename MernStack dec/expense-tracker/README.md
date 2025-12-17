# 💰 Expense Tracker

A modern React-based expense tracker to manage your income and expenses with visual analytics.

## Features

- ✅ Add income and expense transactions
- 📊 Visual dashboard with summary cards
- 📈 Category-wise expense breakdown
- 📱 Responsive design for mobile and desktop
- 💾 Local storage for data persistence
- 🔍 Search and filter transactions
- 🗑️ Delete transactions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## How to Use

### Dashboard
- View total income, expenses, and balance
- See expense breakdown by category
- Check recent transactions

### Add Transaction
- Select income or expense
- Enter amount and description
- Choose category and date
- Click "Add Transaction"

### Transaction History
- View all transactions
- Filter by type (income/expense)
- Search by description or category
- Delete unwanted transactions

## Project Structure

```
src/
├── components/
│   ├── Dashboard.jsx       # Main dashboard with charts
│   ├── TransactionForm.jsx # Form to add transactions
│   └── TransactionList.jsx # List and manage transactions
├── App.jsx                 # Main app component
├── App.css                 # Styles
└── main.jsx               # Entry point
```

## Technologies Used

- React 19
- Vite
- CSS3 with Flexbox/Grid
- Local Storage API

## Future Enhancements

- Export data to CSV
- Monthly/yearly reports
- Budget setting and alerts
- Multiple currency support
- Data visualization with charts library