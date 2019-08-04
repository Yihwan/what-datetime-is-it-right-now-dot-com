import React from 'react';

import TimestampSettings from './timestampSettings';


class DatetimeSettings extends React.Component {
  state = {
    isFormatSeparatelySelected: false, 
  }

  render() {

    return(
      <>
        <TimestampSettings />
      </>
    );
  }
}


export default DatetimeSettings; 
