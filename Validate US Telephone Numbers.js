function telephoneCheck(str) {
  var array = str.split('');
  var allowedChar=["(",")","-"];
  if (/[a-z]/ig.test(str)){ // check if input contains letters 
    return false;
  }
  
  
  var number=str.replace(/[^0-9]/g,""); // get rid of all special characters
  var arr=number.split('');
  if (number.length !==10&&number.length!==11){  // check if the length requirement is met
    
    return false;
  }
else if (number.length==11){
    if (arr[0] !== "1")
      return false;    // check if the country code is 1     
else {
  number=str.replace(/\s/g,"");
  arr=number.split('');
  if (arr.indexOf("(")==1){
    if (arr[5]!==")"||arr.lastIndexOf(")")!==5)  // check how many braket is there
      return false;
  }
  else if (arr.indexOf(")")!==-1) // check if ) exist when no ( or when the ( is not in the correct position 
    return false; 
  return true;
} // country code==1    
}
  else {   // number length is 10 (no country code)
    number=str.replace(/\s/g,"");
  arr=number.split('');
  if (arr.indexOf("(")===0){
    if (arr[4]!==")"|| arr.lastIndexOf(")")!==4)
      return false;
  }
  else if (arr.indexOf(")")!==-1)
    return false; 
  return true;
  }    
}//end



telephoneCheck("-1(145)555-5555");
