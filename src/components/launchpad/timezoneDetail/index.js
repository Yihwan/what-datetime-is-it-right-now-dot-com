import React from 'react';
import moment from 'moment';
import 'moment-timezone';

import { stringifyUTCOffset } from 'src/util/datetime';
import LaunchpadWindow from 'src/shared-components/launchpadWindow';
import TIMESTAMP_ACTIONS from 'src/constants/timestamp';

import LocationForm from './components/locationForm';
import ActionButton from './components/actionButton';

import { 
  TimezoneDetailTable, 
  TimezoneDetailContainer, 
  TimeCell, 
  DateCell, 
  ColorCell,
  RegionCell,
  HexCell,
} from './style';

class TimezoneDetail extends React.Component {
  state = {
    
    homeLoc: { zone: 'America/Los_Angeles' },
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
    const region = loc.zone.split('/')[0];
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
      <LaunchpadWindow 
        title="TZ Detail" 
        componentName="TimezoneDetail" 
        optionsHeader="Timezone Selection"
        optionsContent={<LocationForm selectNewLoc={this.selectNewLoc} />}
      >
        <TimezoneDetailContainer>
          <TimezoneDetailTable>
            <thead>
              <tr>
                <th>City</th>
                <th>Region</th>
                <th>Time</th>
                <th>M/D</th>
                <th>Home &#916;</th>
                <th>UTC &#916;</th>
                <th>Time UNIX</th>
                <th>Time HEX</th>
                <th>Time BIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr key="homeLoc">
                <td>Cordovia</td>
                <td>Cordovialand</td>
                <TimeCell>{moment(date).tz(homeLoc.zone).format('HH:mm:ss')}</TimeCell>
                <DateCell>{moment(date).tz(homeLoc.zone).format('MM/DD')}</DateCell>
                <td></td>
                <ColorCell signal>{stringifyUTCOffset(homeLocOffsetUTC)}</ColorCell>
                <td>{TIMESTAMP_ACTIONS['unix'](date)}</td>
                <HexCell>{TIMESTAMP_ACTIONS['hexadecimal'](date)}</HexCell>
                <td>{TIMESTAMP_ACTIONS['binary'](date)}</td>
              </tr>
            </tbody>
            {Object.keys(selectedLoc).map(region => (
              <tbody key={region}>
                <tr>
                  <RegionCell>{region}</RegionCell>
                </tr>
                {selectedLoc[region].map((loc, idx) => {
                  const homeLocOffset = homeLocOffsetUTC - (moment.tz.zone(loc.zone).parse(date) / 60);
                  const utcOffset = moment.tz.zone(loc.zone).parse(date) / 60;

                  return (
                    <tr key={`${loc.city}-${idx}`}>
                      <td>{loc.city}</td>
                      <td>{region}</td>
                      <TimeCell>{moment(date).tz(loc.zone).format('HH:mm:ss')}</TimeCell>
                      <DateCell>{moment(date).tz(loc.zone).format('MM/DD')}</DateCell>
                      <ColorCell signal={homeLocOffset > 0}>{stringifyUTCOffset(homeLocOffset)}</ColorCell>
                      <ColorCell signal={!!(utcOffset > 0)}>{stringifyUTCOffset(utcOffset)}</ColorCell>
                      <td>{TIMESTAMP_ACTIONS['unix'](date)}</td>
                      <HexCell>{TIMESTAMP_ACTIONS['hexadecimal'](date)}</HexCell>
                      <td>{TIMESTAMP_ACTIONS['binary'](date)}</td>
                      <td>
                        <ActionButton
                          loc={loc}
                          removeLoc={this.removeLoc}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ))}
          </TimezoneDetailTable>
        </TimezoneDetailContainer>
      </LaunchpadWindow>
    );
  }
}

export default TimezoneDetail;