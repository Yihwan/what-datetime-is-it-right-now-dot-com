import React from 'react';
import { observer, inject } from 'mobx-react';
import { css } from '@emotion/core';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';
import DateComponent from 'src/components/datetime/dateComponent';
import TimeComponent from 'src/components/datetime/timeComponent';

@inject('timestampStore')
@observer
class Datetime extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    const { timestampStore } = this.props;
    const { locale, format } = timestampStore; 
    const { date } = this.state;

    if (format !== TIMESTAMP_FORMATS.formatted) {
      return(
        <div css={css`font-size: 56px;`}>
          {timestampStore.output(date)}
          {format === 'localeDateString' && ` // ${locale}`}
        </div>
      ); 
    }

    if (format === TIMESTAMP_FORMATS.formatted) {
      return (
        <>
          <TimeComponent date={date} />
          <DateComponent date={date} />
        </>
      );
    }
  }
}

export default Datetime; 
