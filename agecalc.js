// Write your function here:

const howOld=(age,year)=>{
  if(year>2021){
    age+=year-2021;
    return 'You will be '+age+' in the year '   +year;
  } else if(year<2021-age){
    var calcYear = 2021-age-year;
    return 'The year '+year+' was '+calcYear+' years before you were born';
  } else if(year<2021){
    age+=year-2021;
    return 'You were '+age+' in the year '+year;
  }
}



// Once your function is written, write function calls to test your code!
