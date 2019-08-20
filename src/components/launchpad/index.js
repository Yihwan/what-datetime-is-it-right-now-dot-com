import React from 'react';

import Home from './home';
import DatetimeSettings from './datetimeSettings';
import TimezoneGrid from './timezoneGrid';
import TimezoneDetail from './timezoneDetail';
import NewsVideo from './newsVideo';
import NewsMarquee from './newsMarquee';
import NewsFeed from './newsFeed';
import SearchTrends from './searchTrends';
import RadarClock from './radarClock';

import { LaunchpadContainer, Column } from './style';

class Launchpad extends React.Component {
  state = {
    date: new Date(),
    localStorageUpdated: false,
    isAZ5Activated: false, 
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.tick(), 1000);
    window.addEventListener('storage', this.toggleLocalStorageUpdated);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
    window.removeEventListener('storage', this.toggleLocalStorageUpdated);
  }

  activateAZ5 = () => {
    this.setState({ isAZ5Activated: true });
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
    const { isAZ5Activated, date } = this.state; 
    const currentSeconds = date.getSeconds();
    
    if (isAZ5Activated) {
      return null;
    }

    return(
      <LaunchpadContainer>
        <Home activateAZ5={this.activateAZ5}/>
        <DatetimeSettings date={date} toggleLocalStorageUpdated={this.toggleLocalStorageUpdated} />
        <NewsVideo />
        <NewsMarquee />
        <NewsFeed />
        <RadarClock date={date} />
        <TimezoneDetail date={date} />
        <SearchTrends currentSeconds={currentSeconds} />
        <TimezoneGrid date={date} />
      </LaunchpadContainer>
    );
  }
}

export default Launchpad; 
