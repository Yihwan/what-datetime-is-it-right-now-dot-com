import React from 'react';
import { css } from '@emotion/core';

import TIMESTAMP_ACTIONS from 'src/constants/timestamp';

class Timestamp extends React.Component {
  state = {
    date: new Date(),
    localStorageUpdated: false, 
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.tick(), 1000);
    window.addEventListener('storage', this.toggleLocalStorageUpdated);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
    window.removeEventListener('storage', this.toggleLocalStorageUpdated);
  }

  tick = () => {
    this.setState({ date: new Date() });
  }

  toggleLocalStorageUpdated = () => {
    this.setState({ localStorageUpdated: true }, () => {
      this.setState({ localStorageUpdated: false });
    });
  }

  output = date => {
    const {
      locale, numberSystem, calendar, hourCycle, format
    } = JSON.parse(localStorage.getItem('timestampSettings'));

    return(
      TIMESTAMP_ACTIONS[format](
        date,
        locale,
        numberSystem,
        calendar,
        hourCycle
      )
    );
  }

  render() {
    const { date } = this.state;

    return (
      <div css={css`font-size: 56px;`}>
        {this.output(date)}
      </div>
    ); 
  }
}

export default Timestamp; 
