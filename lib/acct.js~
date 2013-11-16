var Q = require('q')

var giveIou = function(amt, t){
  var deferred = Q.defer();
  
  setTimeout(function(){
    deferred.resolve(amt);
  },
  t);
  
  return deferred.promise;
}

function giveIouTo(name, iou){
  iou.then( function(iouAmt){
    console.log('' + name + 'Paid!!  $', iouAmt);
  });
  
  //lets return the iou and see what interesting things can happen
  return iou;
}

var iou = {
  giveIou: giveIou,
  giveIouTo: giveIouTo
}

module.exports = iou;

