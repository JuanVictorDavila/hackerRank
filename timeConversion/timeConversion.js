function timeConversion(s) {
  let time = "";

  if (s.includes("AM")) {
    if(s.substring(0,2) == "12") {
      time = "00";
    } else {
      time = s.substring(0,2);
    }
  } else if(s.includes("PM")) {
    if(s.substring(0,2) == "12") {
      time = s.substring(0,2);
    } else {
      time = parseInt(s.substring(0,2), 10) + 12;
    }
  }
  return time + s.substring(2,8);
}

console.log(timeConversion("12:01:00AM"));