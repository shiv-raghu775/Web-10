// Select DOM elements
const budgetForm = document.getElementById('budget-form');
const budgetList = document.getElementById('budget-list');
const totalBudget = document.getElementById('total-budget');

const investmentForm = document.getElementById('investment-form');
const investmentList = document.getElementById('investment-list');
const totalInvestment = document.getElementById('total-investment');

let budgetExpenses = [];
let investmentData = [];

// Budget Form Submit
budgetForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('expense-name').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);

  budgetExpenses.push({ name, amount });
  updateBudgetUI();
  budgetForm.reset();
});

// Investment Form Submit
investmentForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('investment-name').value;
  const amount = parseFloat(document.getElementById('investment-amount').value);

  investmentData.push({ name, amount });
  updateInvestmentUI();
  investmentForm.reset();
});

// Update Budget UI
function updateBudgetUI() {
  budgetList.innerHTML = '';
  let total = 0;

  budgetExpenses.forEach((expense) => {
    total += expense.amount;
    const li = document.createElement('li');
    li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;
    budgetList.appendChild(li);
  });

  totalBudget.textContent = `Total Expenses: $${total.toFixed(2)}`;
}

// Update Investment UI
function updateInvestmentUI() {
  investmentList.innerHTML = '';
  let total = 0;

  investmentData.forEach((investment) => {
    total += investment.amount;
    const li = document.createElement('li');
    li.textContent = `${investment.name}: $${investment.amount.toFixed(2)}`;
    investmentList.appendChild(li);
  });

  totalInvestment.textContent = `Total Investments: $${total.toFixed(2)}`;
}
