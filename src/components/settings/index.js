import React from 'react';

import TimestampSettings from './timestampSettings';
import DateSettings from './dateSettings';


class DatetimeSettings extends React.Component {
  state = {
    isFormatSeparatelySelected: false, 
  }

  render() {

    return(
      <>
        <TimestampSettings />
        <DateSettings />
      </>
    );
  }
}


export default DatetimeSettings; 
