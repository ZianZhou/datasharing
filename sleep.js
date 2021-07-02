const getSleepHours = (day) => {
  day=day.toLowerCase();
  if(day==='monday'){
    return 8;
  } else if(day==='tuesday'){
    return 10;
  } else if(day==='wednesday'){
    return 7;
  } else if(day==='thursday'){
    return 6;
  } else if(day==='friday'){
    return 9;
  } else if(day==='saturday'){
    return 11;
  } else {
    return 12; 
  }
}

const getActualSleepHours=()=>{
  return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturaday')+getSleepHours('sunday')
}

const getIdealSleepHours=(needed)=>{
  var idealHours = needed;
  return idealHours*7;
}

const calculateSleepDebt =()=>{
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours(10);
  if(actualSleepHours===idealSleepHours){
    console.log('you are getting the perfect amount of sleep');
  } else if(actualSleepHours>idealSleepHours){
    var oversleep = actualSleepHours-idealSleepHours;
    console.log('you sleep too much lol: ' +oversleep);
  } else {
    var undersleep = idealSleepHours-actualSleepHours;
    console.log('yo sleep more plz: ' + undersleep);
  }
}

calculateSleepDebt();
