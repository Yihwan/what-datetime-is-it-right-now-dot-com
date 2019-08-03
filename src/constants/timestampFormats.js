const TIMESTAMP_FORMATS = {
  unix: date => date.getTime(), 
  binary: date => date.getTime().toString(2), 
  hexadecimal: date => date < 256 ? 0 : Math.abs(date).toString(16), 
  dateString: date => date.toDateString(), 
  ISOString: date => date.toISOString(), 
  localeString: date => date.toLocaleString(), 
  localeDateString: date => date.toLocaleDateString(), 
  UTCString: date => date.toUTCString(), 
  timeString: date => date.toTimeString(), 
  militaryTime: date => `${date.getHours()}${date.getMinutes()}:${date.getSeconds()} hours`, 
  formatted: 'formatted',
};

export default TIMESTAMP_FORMATS;