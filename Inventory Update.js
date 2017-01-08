function updateInventory(arr1, arr2) {
  function convertToObject(arr){
    var array={};
    for (var i=0;i<arr.length;i++){  // turn inventory list to object 
    array[arr[i][1]]=arr[i][0];
    }  return array;}
  // convert array to object 
  function updateIventory(inventoryArr,deliveryArr,delivery,inventory){ 
   var updateItem=inventoryArr.map(function(val,pos){
       if (delivery.hasOwnProperty(val[1]))
         val[0]+=delivery[val[1]];
        return val; });
    deliveryArr.forEach(function(val,pos){
      if(inventory.hasOwnProperty(val[1])===false)
        updateItem.push(val); });
    return updateItem; }
  //update inventory: first update quantity of existing item then get new item then concat  
  function sortByLetter(a,b){
   if (a[1].charCodeAt(0)>b[1].charCodeAt(0)) 
     return 1;
    if (a[1].charCodeAt(0)<b[1].charCodeAt(0))
      return -1;
    return 0;
  }
  
 var delivery=convertToObject(arr2);
 var inventory=convertToObject(arr1);
 var newInventory=updateIventory(arr1,arr2,delivery,inventory);
 
    return newInventory.sort(sortByLetter);    
}
// Example inventory lists
var curInv = 
   [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
