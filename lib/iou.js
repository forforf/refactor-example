var Q = require('q')

var giveIouDefault = function(amt, t){
  var deferred = Q.defer();
  
  setTimeout(function(){
    deferred.resolve(amt);
  },
  t);
  
  return deferred.promise;
}

function giveIouToDefault(name, iou){
  iou.then( function(iouAmt){
    console.log('' + name + 'Paid!!  $', iouAmt);
  });
  
  //lets return the iou and see what interesting things can happen
  return iou;
}

//main class - with dependencies explicit in parameters
function Iou(recipient, amt, dur, whenPaids, giveIouFn, giveIouToFn) {
  var giveIou = giveIouFn || giveIouDefault;
  var giveIorTo = giveIouToFn || giveIouToDefault;
  
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

module.exports = Iou;

