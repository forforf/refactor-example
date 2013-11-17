var Iou = require('./lib/iou.js');
var Acct = require('./lib/acct.js');
  
var myAcct = new Acct('me', 10000);

//customized thanks function
function thanks(iouAmt, iou){
  console.log('Thanks', iou.recipient(), 'for your loan of  $', iouAmt);
}  

function jamMsg(){
  console.log('It got me out of a real Jam');
}

var myIous = [
  new Iou('Alex', 10, 1000, [myAcct.withdraw]),
  new Iou('Beth', 20, 2000, [myAcct.withdraw]),
  new Iou('Carl', 30, 3000, [myAcct.withdraw]),
  new Iou('Dave', 40, 4000, [myAcct.withdraw, thanks, jamMsg])
]

myIous.forEach(function(iou){
  iou.give().then(iou.whenPaidFn());
});



