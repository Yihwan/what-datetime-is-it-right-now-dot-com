import React from 'react';
import { observable, action } from 'mobx';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';

class TimestampStore {
  @observable
  format = 'formatted';

  @action
  output = date => TIMESTAMP_FORMATS[this.format](date);

  @action
  setFormat = format => this.format = format; 
}

export default TimestampStore; 