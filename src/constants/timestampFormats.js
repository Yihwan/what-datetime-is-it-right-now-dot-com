import { formatDateForLocale } from './intnl';

export const TIMESTAMP_NAMES = {
  unix: 'UNIX',
  binary: 'Binary',
  hexadecimal: 'Hexadecimal',
  ISOString: 'ISO String',
  UTCString: 'UTC String',
  timeString: 'Time String',
  militaryTime: 'Military Time',
  localeDateString: 'Date String Locale',
  formatted: 'formatted',
}

const TIMESTAMP_ACTIONS = {
  unix: date => date.getTime(), 
  binary: date => date.getTime().toString(2), 
  hexadecimal: date => date < 256 ? 0 : Math.abs(date).toString(16),  
  ISOString: date => date.toISOString(), 
  UTCString: date => date.toUTCString(), 
  timeString: date => date.toTimeString(), 
  militaryTime: date => `${date.getHours()}${date.getMinutes()}:${date.getSeconds()} hours`,  
  localeDateString: (date, locale, numberSystem, calendar, hourCycle) => (
    formatDateForLocale(date, locale, numberSystem, calendar, hourCycle)
  ),  
  formatted: 'formatted',
};

export default TIMESTAMP_ACTIONS;