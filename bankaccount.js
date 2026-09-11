// Building a bank account management program
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  // Deposit action
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({
        type: "deposit",
        amount: amount
      });

      this.balance += amount;

      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }
  // Withdrawal action
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({type: 'withdraw', amount: amount});
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }
  //  Balance check
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }
  // Listing all deposit transactions
  listAllDeposits() {
    const deposits = [];

    for (const transaction of this.transactions) {
      if (transaction.type === "deposit") {
        deposits.push(transaction.amount);
      }
    }

    return `Deposits: ${deposits.join(",")}`;
  }
  // Listing all withdrawal transactions
  listAllWithdrawals() {
    const withdrawals = [];

    for (const transaction of this.transactions) {
      if (transaction.type === 'withdraw') {
        withdrawals.push(transaction.amount);
      }
    }
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}
// Instance of the object
const myAccount = new BankAccount();
// Transactions
console.log(myAccount.deposit(100));
myAccount.withdraw(100);
myAccount.deposit(300);
myAccount.withdraw(50);
myAccount.deposit(200);
