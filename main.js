function interpTime(time, format) {
  let time;
  let format;

  if (typeof time === "string") {
    let t = time.split(" ");
    let x = time[0];
    let n = time[1];

    parseInt(new Date(x + n).getTime());
  } else {
    formattedTime = "Invalid Time, please provide correct time format";
  }

  // format = time.replace('-','').replace(' ','');
  if (format === "YYYYMMDD HH:MM:SS") {
  } else {
    formattedTime = "Invalid Format, please for provide valid date time format";
  }

  return formattedTime;
}
