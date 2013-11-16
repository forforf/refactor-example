var Q = require('q')

var giveIou = require('./lib/iou.js').giveIou;
var giveIouTo = require('./lib/iou.js').giveIouTo;


giveIouTo('Alex', giveIou(10, 1000));
giveIouTo('Beth', giveIou(20, 2000));
giveIouTo('Carl', giveIou(30, 3000));

//giveIouTo now returns the iou promise and can be used
giveIouTo('Dave', giveIou(40, 4000))
  .then( function(iouAmt){
    console.log('Thanks Dave, your $', iouAmt, ' really got me out of a jam');
  })
;  





