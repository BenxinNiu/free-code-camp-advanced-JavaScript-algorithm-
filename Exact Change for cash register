function checkCashRegister(price, cash, cid) {
  var change=(cash-price).toFixed(2);
  var totalFund=0;
  var getChange=[];
  var currency=[100,20,10,5,1,0.25,0.1,0.05,0.01];
  var bills=cid.reverse();
 function countMoney(pre,curr,pos,arr){
        totalFund+=curr[1];
        return ((totalFund+arr[0][1])*100)/100;
  }
  totalFund=cid.reduce(countMoney);
  if (change>totalFund){
    return "Insufficient Funds";
  }
  else if (change==totalFund)
    return "Closed";
   else{  
     for (var i=0;i<bills.length;i++){
       if (change>=currency[i]){
         if (change>=bills[i][1]){
           change=(change-bills[i][1]).toFixed(2);
           getChange.push(bills[i]);
         }
         else{ // have more than enough 
           var howMuch=Math.floor(change/currency[i]);
           change=(change-howMuch*currency[i]).toFixed(2);
           bills[i][1]=howMuch*currency[i];
           getChange.push(bills[i]);
         }
       }  
   } 
     if (change !=="0.00"){
       return "Insufficient Funds";
     }
   }
  
  
  
return getChange;
}
// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
