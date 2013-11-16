var Q = require('q')

var giveIou = function(amt, t){
  var deferred = Q.defer();
  
  setTimeout(function(){
    deferred.resolve(amt);
  },
  t);
  
  return deferred.promise;
}

var iouToAlex = giveIou(10, 1000);

var iouToBeth = giveIou(20, 2000);

iouToAlex.then( function(iouAmt){ 
  console.log('Alex Paid!!  $', iouAmt);
});

iouToBeth.then ( function(iouAmt){
  console.log('Beth Paid!!  $', iouAmt);
});  



