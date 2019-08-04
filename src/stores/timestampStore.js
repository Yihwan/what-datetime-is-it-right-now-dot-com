import { observable, action } from 'mobx';

import TIMESTAMP_ACTIONS from 'src/constants/timestampFormats';
import { DEFAULTS } from 'src/constants/intnl';

class TimestampStore {
  @observable
  format = 'localeDateString';
  @observable
  locale = DEFAULTS.locale;
  @observable
  numberSystem = DEFAULTS.numberSystem;
  @observable
  calendar = DEFAULTS.calendar;
  @observable
  hourCycle = DEFAULTS.hourCycle;

  @action
  output = date => (
    TIMESTAMP_ACTIONS[this.format](
      date, 
      this.locale, 
      this.numberSystem,
      this.calendar,
      this.hourCycle
    )
  );

  @action
  setFormat = format => this.format = format; 

  @action
  setLocale = locale => this.locale = locale; 

  @action
  setNumberSystem = numberSystem => this.numberSystem = numberSystem; 

  @action
  setCalendar = calendar => this.calendar = calendar; 

  @action
  setHourCycle = hourCycle => this.hourCycle = hourCycle; 
}

export default TimestampStore; 