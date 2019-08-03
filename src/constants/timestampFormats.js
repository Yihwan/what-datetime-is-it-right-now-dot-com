import { formatTimestamp } from './intnl';

const TIMESTAMP_FORMATS = {
  unix: date => date.getTime(), 
  binary: date => date.getTime().toString(2), 
  hexadecimal: date => date < 256 ? 0 : Math.abs(date).toString(16),  
  ISOString: date => date.toISOString(), 
  UTCString: date => date.toUTCString(), 
  timeString: date => date.toTimeString(), 
  militaryTime: date => `${date.getHours()}${date.getMinutes()}:${date.getSeconds()} hours`,  
  localeDateString: (date, locale) => formatTimestamp(date, locale),  
  formatted: 'formatted',
};

export default TIMESTAMP_FORMATS;