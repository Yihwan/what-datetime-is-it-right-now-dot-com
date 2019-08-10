import React from 'react';

import TimestampSettings from './timestampSettings';
import TimezoneGrid from './timezoneGrid';
import TimezoneDetail from './timezoneDetail';
import NewsVideo from './newsVideo';
import NewsMarquee from './newsMarquee';

import { LaunchpadContainer } from './style';

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
      <LaunchpadContainer>
        <TimestampSettings />
        <TimezoneDetail date={date}/>
        <TimezoneGrid/>
        <NewsVideo />
        <NewsMarquee />
      </LaunchpadContainer>
    );
  }
}

export default Launchpad; 