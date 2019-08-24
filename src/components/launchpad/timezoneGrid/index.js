import React from 'react'; 
import moment from 'moment';
import 'moment-timezone';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import { TimezoneGridContainer, TimezoneGridTable, ColorableCell } from './style';

// TODO-YK: Utils.
const randomInt = max => (
  Math.floor(Math.random() * Math.floor(max))
);

class TimezoneGrid extends React.Component {
  state = {
    selectedZones: [
      'America/Los_Angeles',
      'America/Chicago',
      'Asia/Kathmandu',
      'Asia/Yangon',
      'Asia/Phnom_Penh',
      'Asia/Singapore',
      'Asia/Tbilisi',
      'Asia/Ulaanbaatar',
      'Asia/Urumqi',
      'Atlantic/Reykjavik',
      'Europe/Budapest',
      'Europe/Moscow',
      'Europe/Athens',
      'Pacific/Palau',
      'Australia/Melbourne',
    ],
  }

  shouldComponentUpdate(prevProps) {
    return prevProps.date.getSeconds() % 8 === 0;
  }

  render() {
    const { selectedZones } = this.state; 

    return(
      <LaunchpadWindow title="TZ Grid" componentName="TimezoneGrid">
        <TimezoneGridContainer>
          <TimezoneGridTable>
            <thead>
              <tr>
                {[...Array(26)].map((_, idx) => {
                  if (idx === 0) {
                    return <td key={idx}>&nbsp;</td>;
                  }
                  return <td key={idx}>LT+{idx - 1}</td>
                })}
              </tr>
              <tr>
                {[...Array(26)].map((_, idx) => (
                  <td key={idx}>&nbsp;</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedZones.map(zone => {
                return (
                  <tr key={zone}>
                    <td>{zone}</td>
                    {[...Array(25)].map((_, idx) => (
                      <ColorableCell key={idx} rand={randomInt(4)}>
                        <pre>{moment().tz(zone).add(idx, 'hours').format('HH:mm[\n]MM/DD')}</pre>
                      </ColorableCell>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </TimezoneGridTable>
        </TimezoneGridContainer>
      </LaunchpadWindow>
    );
  }
}

export default TimezoneGrid;