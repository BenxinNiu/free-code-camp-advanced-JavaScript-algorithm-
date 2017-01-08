function sym(args) {
  var realArgs=Array.prototype.slice.call(arguments);
  
  function filterSelf(val,position,arr){ // function for eliminating repeated element in         each array 
    return arr.indexOf(val)==position;    
  }
  function findDifference(arr1,arr2){  // function for reduce 
    function filter(first,second){       // function for getting difference between first and sec array 
      return first.filter(function(val){
        return second.indexOf(val) == -1;
      });
    }
    return filter(arr1,arr2).concat(filter(arr2,arr1)); //find second time and con cat
  }
  for (var i=0;i<realArgs.length;i++){  
    realArgs[i]=realArgs[i].filter(filterSelf);
  }
  var argument=realArgs.reduce(findDifference);
  
  return argument;
}
sym([1, 2, 3], [5, 2, 1, 4]);
}
