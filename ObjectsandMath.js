// Task 1: Creating a constructor function for the Account object to deposit and withdraw funds.

function Account(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.owner = owner;
}

// Task 2: Implementing methods within the Account object to deposit and withdraw funds.

Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount} into the Account. The new balance is $${this.balance}.`);
    } 
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount} from the Account. New balance after withdrawal is $${this.balance}.`);
    }
};

// Task 3: Creating a method to calculate compound interest based on the balance and specified interest rate.

Account.prototype.calculateInterest = function(rate, years) {
    if (rate > 0 && years > 0) {
        const interest = this.balance * Math.pow((1 + rate / 100), years) - this.balance;
        console.log(`Interest after ${years} years at a rate of ${rate}% is ${interest} of interest.`);
        return interest;
    } 
};

let myAccount = new Account(765897645, "Jason Sech");
myAccount.deposit(500000);
myAccount.withdraw(3500);
myAccount.calculateInterest(12,10)