const options = {
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric',
  weekday: 'long', 
};

export const DEFAULTS = {
  'locale': 'en',
  'calendar': 'gregory',
  'numberSystem': 'latn',
  'hourCycle': 'h12',
  'format': 'localeDateString',
};

export const CALENDARS = {
  'buddhist': 'Buddhist',
  'chinese': 'Chinese',
  'coptic': 'Coptic',
  'ethiopic': 'Ethiopian',
  'gregory': 'Gregorian',
  'hebrew': 'Hebrew',
  'indian': 'Indian',
  'islamic': 'Islamic',
  'japanese': 'Japanese',
  'persian': 'Persian',
  'roc': 'ROC',
}

export const NUMBER_SYSTEMS = {
  'arab': 'Arabic',
  'arabext': 'arabext', 
  'beng': 'Beng', 
  'deva': 'Deva',
  'fullwide': 'Full Wide',
  'gujr': 'Gurjar',
  'guru': 'Guru',
  'hanidec': 'Hanidec',
  'khmr': 'Khmer',
  'knda': 'Knda',
  'laoo': 'Lao',
  'latn': 'Latin',
  'mlym': 'mlym',
  'mong': 'mong',
  'mymr': 'mymr',
  'orya': 'orya',
  'tamldec': 'tamldec',
  'telu': 'telu',
  'thai': 'thai',
  'tibt': 'Tibet',
};

export const HOUR_CYCLES = {
  'h12': '12-hour',
  'h24': '24-hour',
}

export const LOCALES = {
  'ar': 'Arabic',
  'am': 'Amharic',
  'bg': 'Bulgarian',
  'bn': 'Bengali',
  'ca': 'Catalan',
  'cs': 'Czech',
  'da': 'Danish',
  'de':	'German',
  'el':	'Greek',
  'en':	'English',
  'es':	'Spanish',
  'et':	'Estonian',
  'fa':	'Persian',
  'fi':	'Finnish',
  'fil': 'Filipino',
  'fr':	'French',
  'gu':	'Gujarati',
  'he':	'Hebrew',
  'hi':	'Hindi',
  'hr':	'Croatian',
  'hu':	'Hungarian',
  'id':	'Indonesian',
  'it':	'Italian',
  'ja':	'Japanese',
  'kn':	'Kannada',
  'ko':	'Korean',
  'lt':	'Lithuanian',
  'lv':	'Latvian',
  'ml':	'Malayalam',
  'mr':	'Marathi',
  'ms':	'Malay',
  'nl':	'Dutch',
  'no':	'Norwegian',
  'pl':	'Polish',
  'pt': 'Portuguese',
  'ro':	'Romanian',
  'ru':	'Russian',
  'sk':	'Slovak',
  'sl':	'Slovenian',
  'sr':	'Serbian',
  'sv':	'Swedish',
  'sw':	'Swahili',
  'ta':	'Tamil',
  'te':	'Telugu',
  'th':	'Thai',
  'tr':	'Turkish',
  'uk':	'Ukrainian',
  'vi':	'Vietnamese',
  'zh': 'Chinese',
};

export const formatDateForLocale = (date, locale, numberSystem, calendar, hourCycle) => (
  date
    .toLocaleDateString(
      `${locale}-u-nu-${numberSystem}-ca-${calendar}-hc-${hourCycle}`, 
      options
    )
);

export const generateLocaleSelectData = () => (
  Object.keys(LOCALES).map(datetimeKey => (
    {
      datetimeKey,
      value: LOCALES[datetimeKey],
      type: 'locale',
    }
  ))
);

export const generateNumberSystemSelectData = () => (
  Object.keys(NUMBER_SYSTEMS).map(datetimeKey => (
    {
      datetimeKey,
      value: NUMBER_SYSTEMS[datetimeKey],
      type: 'numberSystem',
    }
  ))
);

export const generateCalendarSelectData = () => (
  Object.keys(CALENDARS).map(datetimeKey => (
    {
      datetimeKey,
      value: CALENDARS[datetimeKey],
      type: 'calendar',
    }
  ))
);

export const generateHourCycleSelectData = () => (
  Object.keys(HOUR_CYCLES).map(datetimeKey => (
    {
      datetimeKey,
      value: HOUR_CYCLES[datetimeKey],
      type: 'hourCycle',
    }
  ))
);

export const selectData = {
  localeData: generateLocaleSelectData(),
  numberSystemData: generateNumberSystemSelectData(),
  calendarData: generateCalendarSelectData(),
  hourCycleData: generateHourCycleSelectData(),
}