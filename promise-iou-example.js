// we actually didn't need once iou was moved to its own lib
//var Q = require('q')

var giveIou = require('./lib/iou.js').giveIou;
var giveIouTo = require('./lib/iou.js').giveIouTo;
var Acct = require('./lib/acct.js');
  
var myAcct = new Acct('me', 10000);

console.log('My Acct started with: $', myAcct.balance());

// note that the function invoked by then takes the iouAmt parameter
giveIouTo('Alex', giveIou(10, 1000))
  .then( myAcct.withdraw )
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

