import React from 'react';
import { observable, action } from 'mobx';
import { format } from 'url';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';

class DateSettingsStore {
  @observable 
  dateFormat = {

  }

  @action 
  format = date => {
    return date.getHours();
  }

  @action 
  toggle24HourFormat = () => {
    this.is24HourFormat = !this.is24HourFormat;
  }
}

export default DateSettingsStore; 