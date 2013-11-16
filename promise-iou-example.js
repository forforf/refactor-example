var Q = require('q')

var giveIou = require('./lib/iou.js').giveIou;
var giveIouTo = require('./lib/iou.js').giveIouTo;

//our money shouldn't be infinite
var myAcct = 10000;
console.log('My Acct started with: $', myAcct);

//and we should deduct when we pay an IOU
giveIouTo('Alex', giveIou(10, 1000))
  .then( function(iouAmt){
    myAcct = myAcct - iouAmt;
    console.log('My Acct: $', myAcct);
  })
;
giveIouTo('Beth', giveIou(20, 2000))
  .then( function(iouAmt){
    myAcct = myAcct - iouAmt;
    console.log('My Acct: $', myAcct);
  })
;
giveIouTo('Carl', giveIou(30, 3000))
  .then( function(iouAmt){
    myAcct = myAcct - iouAmt;
    console.log('My Acct: $', myAcct);
  })
;
giveIouTo('Dave', giveIou(40, 4000))
  .then( function(iouAmt){
    console.log('Thanks Dave, your $', iouAmt, ' really got me out of a jam');
  }) 
;  
giveIouTo('Dave', giveIou(40, 4000))
  .then( function(iouAmt){
    myAcct = myAcct - iouAmt;
    console.log('My Acct: $', myAcct);
  })

/*
Note: this pseudo code works:
giveIouTo().then( 'do things')
giveIouTo().then( 'do more things')

This pseudo code does NOT work
giveIouTo().then('do things').then('do more things')

because the first '.then' returns resolved iou
if the first '.then' resolved to another promise, then
the second approach would work

*/


