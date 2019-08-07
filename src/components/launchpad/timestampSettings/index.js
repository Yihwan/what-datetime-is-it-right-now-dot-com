import React from 'react';

import { TIMESTAMP_NAMES } from 'src/constants/timestamp';
import { DEFAULTS, selectData } from 'src/constants/international';

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
      <>
        {Object.keys(DEFAULTS)
          .filter(name => name !== 'format')
          .map(selectOption => (
            <label key={selectOption}>{selectOption}
              <select 
                name={selectOption} 
                onChange={this.handleTimestampSettingsChange} 
                value={this.state[selectOption]}
              >
                {selectData[selectOption].map(data => (
                  <option key={data.value} value={data.value}>
                    {data.text}
                  </option>
                ))}
              </select>
            </label>
          ))}

        <fieldset>
          {Object.keys(TIMESTAMP_NAMES)
            .map(format => (
              <div key={format}>
                <input
                  name="format"
                  type="radio"
                  key={format}
                  id={format}
                  value={format}
                  onChange={this.handleTimestampSettingsChange}
                  checked={format === this.state.format}
                />
                <label htmlFor={format}>
                  {TIMESTAMP_NAMES[format]}
                </label>
              </div>
            ))}
        </fieldset>
      </>
    );
  }
}

export default TimestampSettings; 