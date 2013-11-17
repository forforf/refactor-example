var Iou = require('./lib/iou.js');
var Acct = require('./lib/acct.js');
  
var myAcct = new Acct('me', 10000);

//Iou class exported to iou lib

//customized thanks function
function thanks(iouAmt, iou){
  console.log('Thanks', iou.recipient(), 'for your loan of  $', iouAmt);
}  

function jamMsg(){
  console.log('It got me out of a real Jam');
}

// we can get rid of the array by giving the IOU when creating it


var myIous = [
  new Iou('Alex', 10, 1000, [myAcct.withdraw]),
  new Iou('Beth', 20, 2000, [myAcct.withdraw]),
  new Iou('Carl', 30, 3000, [myAcct.withdraw]),
  new Iou('Dave', 40, 4000, [myAcct.withdraw, thanks, jamMsg])
]

//We can simplify by passing the function rathern than invoking it
myIous.forEach(function(iou){
  iou.give().then(iou.whenPaidFn());
});



