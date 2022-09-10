// converts milliseconds to HH:MM:SS
export function time_convert(time) {
  var seconds = time / 1000;
  var hours = parseInt(seconds / 3600);
  // extract the remaining seconds after extracting hours
  seconds = parseInt(seconds % 3600);
  var minutes = parseInt(seconds / 60);
  // keep only seconds not extracted to minutes
  seconds = parseInt(seconds % 60);
  // format so it shows a leading zero if needed
  let hoursStr = ("00" + hours).slice(-2);
  let minutesStr = ("00" + minutes).slice(-2);
  let secondsStr = ("00" + seconds).slice(-2);
  return hoursStr + ":" + minutesStr + ":" + secondsStr;
}
