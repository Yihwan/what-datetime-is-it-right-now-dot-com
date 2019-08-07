import React from 'react';
import moment from 'moment';
import 'moment-timezone';

import { stringifyUTCOffset } from 'src/util/datetime';

import LocationForm from './components/locationForm';
import ActionButton from './components/actionButton';
import { TimezoneDetailTable } from './style';

class TimezoneDetail extends React.Component {
  state = {
    
    homeLoc: { city: 'San Francisco', countryCode: 'US', zone: 'America/Los_Angeles' },
    selectedLoc: {
      'America': [
        { city: 'Chicago', zone: 'America/Chicago' },
        { city: 'New York', zone: 'America/New_York' },
        { city: 'Toronto', zone: 'America/Toronto' },
      ], 
      'Europe': [
        { city: 'London', zone: 'Europe/London' },
        { city: 'Frankfurt', zone: 'Europe/Berlin' },
        { city: 'Zurich', zone: 'Europe/Zurich' },
        { city: 'Paris', zone: 'Europe/Paris' },
      ], 
      'Asia': [
        { city: 'Dubai', zone: 'Asia/Dubai' },
        { city: 'Bangkok', zone: 'Asia/Bangkok' },
        { city: 'Hong Kong', zone: 'Asia/Hong_Kong' },
        { city: 'Singapore', zone: 'Asia/Singapore' },
        { city: 'Beijing', zone: 'Asia/Shanghai' },
        { city: 'Shanghai', zone: 'Asia/Shanghai' },
        { city: 'Tokyo', zone: 'Asia/Tokyo' },
      ],
      'Africa': [
        { city: 'Johannesburg', zone: 'Africa/Johannesburg' },
      ],
      'Australia': [
        { city: 'Sydney', zone: 'Australia/Sydney' },
      ]
    },
  }

  componentDidMount() {
    this.setState(
      Object.assign(
        this.state, JSON.parse(localStorage.getItem('timezoneDetailLoc'))
      ));

    localStorage.setItem('timezoneDetailLoc', JSON.stringify(this.state));
  }

  selectNewLoc = zone => {
    const [region, city] = zone.split('/');
    const { selectedLoc } = this.state; 
    const newSelectedLoc = Object.assign({}, selectedLoc)

    newSelectedLoc[region] = [...newSelectedLoc[region] || [], { city, zone }];

    this.setState({ selectedLoc: newSelectedLoc }, () => {
      localStorage.setItem('timezoneDetailLoc', JSON.stringify(this.state));
    });
  }

  removeLoc = loc => {
    const [region, city] = loc.zone.split('/');
    const newArray = [...this.state.selectedLoc[region]];
    const index = newArray.indexOf(loc);

    if (index !== -1) {
      newArray.splice(index, 1)
      this.setState(prevState => ({
        selectedLoc: {
          ...prevState.selectedLoc, 
          [region]: newArray,
        }
      }), () => {
          localStorage.setItem('timezoneDetailLoc', JSON.stringify(this.state));
      });
    }
  }

  render() {
    const { date } = this.props; 
    const { homeLoc, selectedLoc } = this.state; 
    const homeLocOffsetUTC = moment.tz.zone(homeLoc.zone).parse(date) / 60;

    return(
      <>
        <div>Timezone Detail:</div>
        <TimezoneDetailTable>
          <thead>
            <tr>
              <th>Location</th>
              <th>D</th>
              <th>Time</th>
              <th>Date M/D</th>
              <th>Home Zone Diff</th>
              <th>UTC Diff</th>
              <th>Timezone</th>
              <th>D/N Circle</th>
              <th>Sunrise Time</th>
              <th>Sunset Time</th>
            </tr>
          </thead>
          <tbody>
            <tr key="homeLoc">
              <td>{homeLoc.city}</td>
              <td></td>
              <td>{moment(date).tz(homeLoc.zone).format('HH:mm:ss')}</td>
              <td>{moment(date).tz(homeLoc.zone).format('MM/DD')}</td>
              <td>N/A</td>
              <td>{stringifyUTCOffset(homeLocOffsetUTC)}</td>
              <td>{homeLoc.zone}</td>
              <td>D/N Circle</td>
              <td>Sunrise Time</td>
              <td>Sunset Time</td>
            </tr>
          </tbody>
          {Object.keys(selectedLoc).map(region => (
            <tbody key={region}>
              <tr>
                <td>{region}</td>
              </tr>
              {selectedLoc[region].map((loc, idx) => (
                <tr key={`${loc.city}-${idx}`}>
                  <td>{loc.city}</td>
                  <td>
                    <ActionButton 
                      loc={loc}
                      removeLoc={this.removeLoc} 
                    />
                    </td>
                  <td>{moment(date).tz(loc.zone).format('HH:mm:ss')}</td>
                  <td>{moment(date).tz(loc.zone).format('MM/DD')}</td>
                  <td>{stringifyUTCOffset(homeLocOffsetUTC - (moment.tz.zone(loc.zone).parse(date) / 60))}</td>
                  <td>{stringifyUTCOffset(moment.tz.zone(loc.zone).parse(date) / 60)}</td>
                  <td>{loc.zone}</td>
                  <td>D/N Circle</td>
                  <td>Sunrise Time</td>
                  <td>Sunset Time</td>
                </tr>
              ))}
            </tbody>
          ))}
        </TimezoneDetailTable>
        <LocationForm selectNewLoc={this.selectNewLoc} />
      </>
    );
  }
}

export default TimezoneDetail;