import { formatDateForLocale } from './international';

export const TIMESTAMP_NAMES = {
  localeDateString: 'Locale Date String',
  unix: 'UNIX',
  binary: 'Binary',
  hexadecimal: 'Hexadecimal',
  ISOString: 'ISO String',
}

const TIMESTAMP_ACTIONS = {
  localeDateString: (date, locale, numberSystem, calendar, hourCycle) => (
    formatDateForLocale(date, locale, numberSystem, calendar, hourCycle)
  ),  
  unix: date => date.getTime(), 
  binary: date => date.getTime().toString(2), 
  hexadecimal: date => date < 256 ? 0 : Math.abs(date).toString(16),  
  ISOString: date => date.toISOString(), 
  UTCString: date => date.toUTCString(), 
  timeString: date => date.toTimeString(), 
  militaryTime: date => `${date.getHours()}${date.getMinutes()}:${date.getSeconds()} hours`,  
};

export default TIMESTAMP_ACTIONS;