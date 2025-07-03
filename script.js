let expenses = [];

function addExpense() {
  const categoryInput = document.getElementById("category");
  const amountInput = document.getElementById("amount");

  const category = categoryInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (!category || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid category and amount.");
    return;
  }

  const expense = {
    id: Date.now(),
    category,
    amount
  };

  expenses.push(expense);
  categoryInput.value = "";
  amountInput.value = "";

  renderExpenses();
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  renderExpenses();
}

function renderExpenses() {
  const expenseList = document.getElementById("expenseList");
  const totalAmount = document.getElementById("totalAmount");

  expenseList.innerHTML = "";

  let total = 0;

  expenses.forEach(exp => {
    const div = document.createElement("div");
    div.className = "expense-item";

    div.innerHTML = `
      <span>${exp.category}: ₹${exp.amount}</span>
      <button class="delete-btn" onclick="deleteExpense(${exp.id})">Delete</button>
    `;

    expenseList.appendChild(div);
    total += exp.amount;
  });

  totalAmount.textContent = total.toFixed(2);
}
