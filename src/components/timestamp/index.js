import React from 'react';

import { DEFAULTS } from 'src/constants/international';
import TIMESTAMP_ACTIONS from 'src/constants/timestamp';

class Timestamp extends React.Component {
  state = {
    date: new Date(),
    localStorageUpdated: false, 
    datetimeSettings: {...DEFAULTS},
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.tick(), 1000);
    this.setState(
      Object.assign(
        this.state.datetimeSettings, JSON.parse(localStorage.getItem('datetimeSettings'))
      ));
    localStorage.setItem('datetimeSettings', JSON.stringify(this.state.datetimeSettings));

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
    if (typeof window === 'undefined') return;
    
    if (!JSON.parse(localStorage.getItem('datetimeSettings'))) return;

    const {
      locale, numberSystem, calendar, hourCycle, format
    } = JSON.parse(localStorage.getItem('datetimeSettings'));

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
      <div>
        {this.output(date)}
      </div>
    ); 
  }
}

export default Timestamp; 
