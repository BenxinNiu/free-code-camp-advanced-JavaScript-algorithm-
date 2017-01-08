function pairwise(arr, arg) {
  var array=arr.slice();
  var sum=0;
  for (var i=0;i<arr.length;i++){
    for (var j=i+1;j<arr.length;j++){
      if (array[i]+array[j]==arg){
        sum+=i+j;
        array[i]=array[j]=NaN;
      }
    }
  }
  
  return sum;
}
