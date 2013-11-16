var Q = require('q')

var giveIou = require('./lib/iou.js');

//refactor to create function for giving IOUs to people
function giveIouTo(name, iou){
  iou.then( function(iouAmt){
    console.log('' + name + 'Paid!!  $', iouAmt);
  });
}

//new way
giveIouTo('Carl', giveIou(30, 3000));
giveIouTo('Dave', giveIou(40, 4000));


//old way
var iouToAlex = giveIou(10, 1000);

var iouToBeth = giveIou(20, 2000);

iouToAlex.then( function(iouAmt){ 
  console.log('Alex Paid!!  $', iouAmt);
});

iouToBeth.then ( function(iouAmt){
  console.log('Beth Paid!!  $', iouAmt);
});  



