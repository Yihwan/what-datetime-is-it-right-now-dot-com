const options = {

  weekday: 'long',
};

const INTNL = {
  arabic: {
    locale: 'ar',
  },
  amharic: {
    locale: 'am',
  },
  bulgarian: {
    locale: 'bg',
  },
  bengali: {
    locale: 'bn',
  },
  catalan: {
    locale: 'ca',
  },
  czech: {
    locale: 'cs',
  },
  danish: {
    locale: 'da',
  },
  german: {
    locale: 'de',
  },
  greek: {
    locale: 'el',
  },
  english: {
    locale: 'en',
  },
  spanish: {
    locale: 'es',
  },
  estonian: {
    locale: 'et',
  },
  persian: {
    locale: 'fa',
  },
  finnish: {
    locale: 'fi',
  },
  filipino: {
    locale: 'fil',
  },
  french: {
    locale: 'fr',
  },
  gujrati: {
    locale: 'gu',
  },
  hebrew: {
    locale: 'he',
  },
  hindi: {
    locale: 'hi',
  },
  croatian: {
    locale: 'hr',
  },
  hungarian: {
    locale: 'hu',
  },
  indonesian: {
    locale: 'id',
  },
  italian: {
    locale: 'it',
  },
  japanese: {
    locale: 'ja',
  },
  kannada: {
    locale: 'kn',
  },
  korean: {
    locale: 'ko',
  },
  lithuanian: {
    locale: 'lt',
  },
  latvian: {
    locale: 'lv',
  },
  malayalam: {
    locale: 'ml',
  },
  marathi: {
    locale: 'mr',
  },
  malay: {
    locale: 'ms',
  },
  dutch: {
    locale: 'nl',
  },
  norwegian: {
    locale: 'no',
  },
  polish: {
    locale: 'pl',
  },
  portuguese: {
    locale: 'pt',
  },
  romanian: {
    locale: 'ro',
  },
  russian: {
    locale: 'ru',
  },
  slovak: {
    locale: 'sk',
  },
  slovenian: {
    locale: 'sl',
  },
  serbian: {
    locale: 'sr',
  },
  swedish: {
    locale: 'sv',
  },
  swahili: {
    locale: 'sw',
  },
  tamil: {
    locale: 'ta',
  },
  telugu: {
    locale: 'te',
  },
  thai: {
    locale: 'th',
  },
  turkish: {
    locale: 'tr',
  },
  ukrainian: {
    locale: 'uk',
  },
  vietnamese: {
    locale: 'vi',
  },
  chinese: {
    locale: 'zh',
  },
};

export const formatTimestamp = (date, lang) => (
  date.toLocaleDateString(INTNL[lang].locale, options)
);

export const generateSelectData = () => (
  Object.keys(INTNL).map(lang => (
    {
      text: lang, 
      value: INTNL[lang].locale,
    }
  ))
)

export default INTNL;