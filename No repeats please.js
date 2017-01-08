function permAlone(str){
 var arr=str.split('');
 var perms=[];
 var checkRepeat=/(.)\1+/g;
   var noRepeatCount=0;
   function swap(pos1,pos2){
     var temp=arr[pos1];
     arr[pos1]=arr[pos2];
     arr[pos2]=temp;
   }
  function permutation(length){ // heap's fuking algorithm
    if (length==1)
      perms.push(arr.join(''));
    else {
      for (var i=0;i<length;i++){
        permutation(length-1); // call it again 
        swap(length % 2 ? 0 : i,length-1);
      }
    }
  }
  
   
 permutation(arr.length);
 var noRepeat=perms.filter(function(val){
   return val.match(checkRepeat)===null;
 });
    
  
  return noRepeat.length;
}

