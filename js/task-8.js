const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
   balance: 0,
    transactions: [],
    createTransaction(amount, type) { },
    deposit(amount) {
        this.balance += amount; 
     },
    withdraw(amount) { },
    getBalance() { },
    getTransactionDetails(id) { },
     getTransactionTotal(type) {},
};
    

account.deposit(200);

