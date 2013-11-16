var Q = require('q')

var giveIou = require('./lib/iou.js').giveIou;
var giveIouTo = require('./lib/iou.js').giveIouTo;

//Lets make an account a function with a method for deducting
//and use it to track our money.
function Acct(name, initialDeposit){
  var balance = initialDeposit;
  this.name = function(){ return name };
  this.balance = function(){ return balance };
  this.withdraw = function(amt) {
    balance = balance - amt;
    console.log('Balance for', name, 'is $', balance);
    return balance;
  }
}  
var myAcct = new Acct('me', 10000);

console.log('My Acct started with: $', myAcct.balance());

// note that the function invoked by then takes the iouAmt parameter
giveIouTo('Alex', giveIou(10, 1000))
  .then( function(iouAmt){
    myAcct.withdraw(iouAmt);
    console.log('My Acct: $', myAcct.balance());
  })
;

// lets replace it with the withdraw method from Acct class
giveIouTo('Beth', giveIou(20, 2000))
  .then( myAcct.withdraw )
;

giveIouTo('Carl', giveIou(30, 3000))
  .then( myAcct.withdraw )
;

giveIouTo('Dave', giveIou(40, 4000))
  .then( function(iouAmt){
    console.log('Thanks Dave, your $', iouAmt, ' really got me out of a jam');
  }) 
;  
giveIouTo('Dave', giveIou(40, 4000))
  .then( myAcct.withdraw )
;  

