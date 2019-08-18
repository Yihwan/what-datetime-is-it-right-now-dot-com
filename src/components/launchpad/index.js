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
    const currentSeconds = date.getSeconds();

    return(
      <LaunchpadContainer>
        <Home />
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