//Lets make an account a function with a method for deducting
//and use it to track our money.
function Acct(name, initialDeposit){
  var balance = initialDeposit;
  console.log('Hello ', name, 'your account stated with: $', balance);

  this.name = function(){ return name };
  this.balance = function(){ return balance };
  this.withdraw = function(amt) {
    balance = balance - amt;
    console.log('Balance for', name, 'is $', balance);
    return balance;
  }
}

module.exports = Acct;

