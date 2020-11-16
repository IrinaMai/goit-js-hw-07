const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const { DEPOSIT, WITHDRAW } = Transaction;


const account = {
  balance: 0,
  id: 0,
  getBalance() {
    return this.balance;
  },
  transactions: [],
  getTransactions(amount, type) {
     const trans = {
      id: this.id,
      amount,
      type,
    }
    this.transactions.push(trans)
  },
  getDeposit(amount) {
    this.id += 1;
    this.balance += amount;
    this.getTransactions(amount, DEPOSIT)
  },
  getWithdraw(amount) {
    if (this.balance >= amount) {
      this.id += 1;
      this.balance -= amount;
      this.getTransactions(amount, WITHDRAW)
    } else {
      alert('Ooops no money')
    }
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


// console.log(account.getWithdraw(20000));

console.log(account.getDeposit(500));
console.log(account.getDeposit(800));
console.log(account.getWithdraw(150));

console.log(account.transactions);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getBalance());



