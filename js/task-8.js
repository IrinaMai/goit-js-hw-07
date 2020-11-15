const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const { DEPOSIT, WITHDRAW } = Transaction;
let id = 0;

const account = {
  balance: 0,
  getBalance() {
    return this.balance;
  },
  transactions: [],
  getTransactions(amount, type) {
    const trans = {
      id,
      amount,
      type,
    }
    this.transactions.push(trans)
  },
  getDeposit(amount) {
    id += 1;
    this.balance += amount;
    this.getTransactions(amount, DEPOSIT)

  },
  getWithdraw(amount) {
    id += 1;
    this.balance -= amount;
    this.getTransactions(amount, WITHDRAW)
  },
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        console.log(this.transactions[i]);
      }
    }
  },
  getTransactionTotal(type) {
    let transactionTotal = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].type === type) {
        transactionTotal += this.transactions[i].amount;
      }
    }
    return transactionTotal;
   },

};


console.log(account.getWithdraw(200));
console.log(account.getWithdraw(150));
console.log(account.getDeposit(500));
console.log(account.getDeposit(800));

console.log(account.transactions);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getBalance());



