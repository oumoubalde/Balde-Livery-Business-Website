//<script language="JavaScript">
		// calculate how many day left before Independence day ie July 04, 2017
//<!-- Hide from non-JavaScript browsers 
function XmasDays(CurrentDay) {
   var XYear=CurrentDay.getFullYear();
   var XDay=new Date("December,25,2017");
   //XDay.setFullYear(XYear);
   var DayCount=(XDay-CurrentDay)/(1000*60*60*24);
   DayCount=Math.round(DayCount);
return DayCount;
}
function MonthTxt (MonthNumber) {
   var Month=new Array();
   Month[1]="January";
   Month[2]="February";
   Month[3]="March";
   Month[4]="April";
   Month[5]="May";
   Month[6]="June";
   Month[7]="July";
   Month[8]="August";
   Month[9]="September";
   Month[10]="October";
   Month[11]="November";
   Month[12]="December";
return Month[MonthNumber];
}
// Stop hiding -->
//</script>


//<script language="JavaScript">
  // <!-- Hide from non-JavaScript browsers
   var Today=new Date();
   var ThisDay=Today.getDate();
   var ThisMonth=Today.getMonth()+1;
   var ThisYear=Today.getFullYear();
   var DaysLeft=XmasDays(Today);
   var MonthName=MonthTxt(ThisMonth);
   document.write("<h2>Today is "+MonthName+" "+ThisDay+ ".</h2><br>");
   if (DaysLeft > 0) {
      document.write("<h2>Only "+DaysLeft+" days  left before <em>Christmas</em>, our big annual sales of <em>15% off</em>.</h2>");
	  
   } else {
      document.write("Happy Holidays ");
   }
   // Stop hiding -->
//</script>  