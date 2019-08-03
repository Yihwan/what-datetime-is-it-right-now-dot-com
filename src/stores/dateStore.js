import React from 'react';
import { observable, action } from 'mobx';
import { format } from 'url';

import DATE_FORMATS from 'src/constants/dateFormats';

class DateStore {
  @observable 
  format = 'standard'

  @action
  output = date => DATE_FORMATS[this.format](date);

  @action
  setFormat = format => this.format = format; 


}

export default DateStore; 