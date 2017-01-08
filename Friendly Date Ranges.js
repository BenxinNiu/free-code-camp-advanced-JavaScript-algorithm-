function makeFriendlyDates(arr) {
 arr[0]=arr[0].split("-");
 arr[1]=arr[1].split("-");
 var friendly=[];
 var convertedDate=[];
  var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
  var number=["01","02","03","04","05","06","07","08","09","10","11","12"];
  var suffix=["st","nd","rd"]; 
  function getDate(arr){
    for (var i=0;i<arr.length;i++){
     var date=[];
     var position=number.indexOf(arr[i][1]);
     var month=monthArray[position];
      date.push(month);
      var dayPos=parseInt(arr[i][2][1]);
      if (parseInt(arr[i][2])>20){
   if (dayPos>3||dayPos===0)
      dayPos=parseInt(arr[i][2])+"th";
   else 
     dayPos=parseInt(arr[i][2])+suffix[dayPos-1];  }
      else if(parseInt(arr[i][2])<=3) {
     dayPos=parseInt(arr[i][2])+suffix[dayPos-1];
      }
      else 
        dayPos=parseInt(arr[i][2])+"th";
    date.push(dayPos);
    friendly.push(date);
    } return  friendly;}
  function friendlyDate(start,end){
    var ending,begining;
    var oneYear=true;
  if (start[0]!==end[0]){
    if(parseInt(end[0])-parseInt(start[0])==1&&parseInt(end[1])-parseInt(start[1])<=0){  //within one year hold on check day 
      if (end[1]==start[1]&&parseInt(start[2])>parseInt(end[2])){ // same month within o    
        ending=friendly[1][0]+" "+friendly[1][1]; }
      else if(end[1]==start[1]&&parseInt(start[2])<=parseInt(end[2])){
       oneYear=false;
       ending=friendly[1][0]+" "+friendly[1][1]+","+" "+end[0]; } // same month exceed one year 
    else 
       ending=friendly[1][0]+" "+friendly[1][1];
  }
    else{ 
      oneYear=false;
      ending=friendly[1][0]+" "+friendly[1][1]+","+" "+end[0];
    }
  }
    if(start[0]==end[0]) {  // same year
      if (start[1]==end[1])  // range within same month 
        ending=friendly[1][1];
      else                   // within one year but exceed one month 
        ending=friendly[1][0]+" "+friendly[1][1];
    }
    if (oneYear===true&&start[0]=="2016")
      begining=friendly[0][0]+" "+friendly[0][1];
    else 
      begining=friendly[0][0]+" "+friendly[0][1]+","+" "+start[0];
    
      convertedDate.push(begining);
      convertedDate.push(ending);
    
    if (start[0]==end[0]&&start[1]==end[1]&&start[2]==end[2]){
     convertedDate=[];
     convertedDate.push(begining);
    }
  
  return convertedDate;}
  friendly=getDate(arr);
  return friendlyDate(arr[0],arr[1]);
}

makeFriendlyDates(["2022-09-05", "2023-09-04"]);
