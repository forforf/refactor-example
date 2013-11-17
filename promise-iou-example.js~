var giveIou = require('./lib/iou.js').giveIou;
var giveIouTo = require('./lib/iou.js').giveIouTo;
var Acct = require('./lib/acct.js');
  
var myAcct = new Acct('me', 10000);

// Ok, this is much more concise, but there are two issues
//   1) readability is pretty bad
//   2) We lost our individualized thanks.
// Is there a way to fix this?

// What if we create a IouRecipient Class?

function Iou(recipient, amt, dur, whenPaids) {
  var _this = this; //handle for this object when created

  this.payFuncs = whenPaids;
  this.recipient = function(){ return recipient; };
  this.amt = function(){ return amt; };
  this.duration = function(){ return dur; };

  //this works, but it has issues to address  
  this.give = function(){
    return giveIouTo( _this.recipient(), giveIou(_this.amt(), _this.duration()));
  }
  
  this.whenPaidFn = function(){
    var whenPaid = function(iouAmt){
      _this.payFuncs.forEach( function(payFunc) {
        // allows us to pass self-referencing object to whenPaids
        payFunc(iouAmt, _this);
      });
    };
    return whenPaid;
  }
}

//now we can customize the thanks fn
function thanks(iouAmt, iou){
  console.log('Thanks', iou.recipient(), 'for your loan of  $', iouAmt);
}  

function jamMsg(){
  console.log('It got me out of a real Jam');
}

//myAcct.withdraw still works, because we kept the iouAmt the first arg
var myIous = [
  new Iou('Alex', 10, 1000, [myAcct.withdraw]),
  new Iou('Beth', 20, 2000, [myAcct.withdraw]),
  new Iou('Carl', 30, 3000, [myAcct.withdraw]),
  new Iou('Dave', 40, 4000, [myAcct.withdraw, thanks, jamMsg])
]

//This takes the place of listing each person individually
myIous.forEach(function(iou){
  iou.give().then(function(amt){
    iou.whenPaidFn()(amt);
  });
});



