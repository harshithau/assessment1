var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 12) {
 time();
} else if (hr == 12) {
  document.write("Good Afternoon!" +"<br>");
} else if (hr >= 12 && hr <= 17) {
  document.write("Good Evening!"+"<br>");
} else {
  document.write("Good night !" +"<br>");
}
var x= "user";
document.write(x);



function functionName() {
    var x = document.getElementById("pp");
    if(x.style.display==="none")
      x.style.display="block";
    else
      x.style.display="none";
  }
  function date_time(id)
{
      date = new Date;
      year = date.getFullYear();
      month = date.getMonth();
      months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
      d = date.getDate();
      day = date.getDay();
      days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
      h = date.getHours();
      if(h<10)
      {
              h = "0"+h;
      }
      m = date.getMinutes();
      if(m<10)
      {
              m = "0"+m;
      }
      s = date.getSeconds();
      if(s<10)
      {
              s = "0"+s;
      }
      result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
      document.getElementById(id).innerHTML = result;
      setTimeout('date_time("'+id+'");','1000');
      return true;
}