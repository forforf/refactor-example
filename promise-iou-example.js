var Q = require('q')

var giveIou = require('./lib/iou.js');

var iouToAlex = giveIou(10, 1000);

var iouToBeth = giveIou(20, 2000);

iouToAlex.then( function(iouAmt){ 
  console.log('Alex Paid!!  $', iouAmt);
});

iouToBeth.then ( function(iouAmt){
  console.log('Beth Paid!!  $', iouAmt);
});  



