var Q = require('q')

var giveIou = require('./lib/iou.js');

function giveIouTo(name, iou){
  iou.then( function(iouAmt){
    console.log('' + name + 'Paid!!  $', iouAmt);
  });
}

giveIouTo('Alex', giveIou(10, 1000));
giveIouTo('Beth', giveIou(20, 2000));
giveIouTo('Carl', giveIou(30, 3000));
giveIouTo('Dave', giveIou(40, 4000));





