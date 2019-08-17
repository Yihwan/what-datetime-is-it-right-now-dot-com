import React from 'react';

import { TIMESTAMP_NAMES } from 'src/constants/timestamp';
import { DEFAULTS, selectData } from 'src/constants/international';
import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import { 
  TimestampSettingsContainer,
  ActionContainer,
  HomeLink,
  CurrentTimeContainer,
} from './style';

class TimestampSettings extends React.Component {
  state = {...DEFAULTS}

  componentDidMount() {
    this.setState(
      Object.assign(
        this.state, JSON.parse(localStorage.getItem('timestampSettings'))
      ));
      
    localStorage.setItem('timestampSettings', JSON.stringify(this.state));
  }

  handleTimestampSettingsChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      localStorage.setItem('timestampSettings', JSON.stringify(this.state));
    });
  }
  
  render() {
    return (
      <LaunchpadWindow title="DATETIME Settings">
        <TimestampSettingsContainer>
          settings
        </TimestampSettingsContainer>
      </LaunchpadWindow>
    );
  }
}

export default TimestampSettings; 

// <TimestampSettingsContainer>
//   {Object.keys(DEFAULTS)
//     .filter(name => name !== 'format')
//     .map(selectOption => (
//       <label key={selectOption}>{selectOption}
//         <select
//           name={selectOption}
//           onChange={this.handleTimestampSettingsChange}
//           value={this.state[selectOption]}
//         >
//           {selectData[selectOption].map(data => (
//             <option key={data.value} value={data.value}>
//               {data.text}
//             </option>
//           ))}
//         </select>
//       </label>
//     ))}

//   <fieldset>
//     {Object.keys(TIMESTAMP_NAMES)
//       .map(format => (
//         <div key={format}>
//           <input
//             name="format"
//             type="radio"
//             key={format}
//             id={format}
//             value={format}
//             onChange={this.handleTimestampSettingsChange}
//             checked={format === this.state.format}
//           />
//           <label htmlFor={format}>
//             {TIMESTAMP_NAMES[format]}
//           </label>
//         </div>
//       ))}
//   </fieldset>
// </TimestampSettingsContainer>