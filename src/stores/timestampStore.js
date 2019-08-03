import React from 'react';
import { observable, action } from 'mobx';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';

class TimestampStore {
  @observable
  format = 'formatted';
  @observable
  locale = 'english';

  @action
  output = date => TIMESTAMP_FORMATS[this.format](date, this.locale);

  @action
  setFormat = format => this.format = format; 

  @action
  setLocale = locale => this.locale = locale; 
}

export default TimestampStore; 