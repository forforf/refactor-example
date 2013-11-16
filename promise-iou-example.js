var giveIou = require('./lib/iou.js').giveIou;
var giveIouTo = require('./lib/iou.js').giveIouTo;
var Acct = require('./lib/acct.js');
  
var myAcct = new Acct('me', 10000);

//lets move this to Acct's constructor rather than main
//console.log('My Acct started with: $', myAcct.balance());


// We could almost interate over Alex, Beth, Carl and Dave
// and insert their names into the giveIouTo function's first arg
// If not for the special message for Dave

// however, we can create a map of names, iuos and a list of thennable
// functions and iterate over that to simplify things

// and a generic thank you function, but it has to accept the amt parameter
// since our thennable functions are just functions without any parameters
function thanks(iouAmt){
  console.log('Thank you sir/madam for your loan of  $', iouAmt, ' kind regards');
}  

var myIous = {
  Alex: {amt: 10, dur: 1000, whenPaid: [myAcct.withdraw]},
  Beth: {amt: 20, dur: 2000, whenPaid: [myAcct.withdraw]},
  Carl: {amt: 30, dur: 3000, whenPaid: [myAcct.withdraw]},
  Dave: {amt: 40, dur: 4000, whenPaid: [myAcct.withdraw, thanks]}
}

//This takes the place of listing each person individually
Object.keys(myIous).forEach(function(name){
  var iou = giveIouTo(name, giveIou(myIous[name].amt, myIous[name].dur))
  
  myIous[name].whenPaid.forEach(function(payFunction){
    iou.then(payFunction);
  });
});





