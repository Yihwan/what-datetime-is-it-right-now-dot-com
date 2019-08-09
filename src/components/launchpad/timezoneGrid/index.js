import React from 'react'; 
import moment from 'moment';
import 'moment-timezone';

import { TimezoneGridTable } from './style';

class TimezoneGrid extends React.Component {
  state = {
    selectedZones: [
      'America/Los_Angeles',
      'America/Chicago',
      'America/New_York',
    ],
  }


  render() {
    const { selectedZones } = this.state; 

    return(
      <TimezoneGridTable>
        <thead>
          <tr><td>H</td></tr>
        </thead>
        <tbody>
          {selectedZones.map(zone => {
            return(
              <tr key={zone}>
                {[...Array(23)].map((_, idx) => (                  
                  <td key={idx}>
                    <pre>{moment().tz(zone).add(idx, 'hours').format('HH:mm[\n]MM/DD')}</pre>
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TimezoneGridTable>
    );
  }
}

export default TimezoneGrid;