import React from 'react';

import TimestampSettings from './timestampSettings';
import TimezoneGrid from './timezoneGrid';
import TimezoneDetail from './timezoneDetail';


class Launchpad extends React.Component {
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

  render() {
    const { date } = this.state; 

    return(
      <>
        <TimestampSettings />
        <TimezoneGrid/>
        <TimezoneDetail date={date}/>
      </>
    );
  }
}


export default Launchpad; 

// output = date => {
//   const {
//     locale, numberSystem, calendar, hourCycle, format
//   } = JSON.parse(localStorage.getItem('timestampSettings'));

//   return (
//     TIMESTAMP_ACTIONS[format](
//       date,
//       locale,
//       numberSystem,
//       calendar,
//       hourCycle
//     )
//   );
// }
