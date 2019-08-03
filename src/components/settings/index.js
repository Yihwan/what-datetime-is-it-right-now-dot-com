import React from 'react';
import { observer, inject } from 'mobx-react';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';

@inject('timestampStore')
@observer
class DatetimeSettings extends React.Component {

  render() {
    const { timestampStore } = this.props;

    return (
      <>
        {Object.keys(TIMESTAMP_FORMATS).map(format => (
          <button key={format} onClick={() => timestampStore.setFormat(format)}>
            {format}
          </button>
        ))}
      </>
    );
  }
}

export default DatetimeSettings; 
