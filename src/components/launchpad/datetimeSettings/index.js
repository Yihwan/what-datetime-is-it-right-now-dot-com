import React from 'react';

import { TIMESTAMP_NAMES } from 'src/constants/timestamp';
import { DEFAULTS, selectData } from 'src/constants/international';
import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import TileColumn from './components/tileColumn';
import Tile from './components/tile';
import { 
  DatetimeSettingsContainer,
} from './style';

class DatetimeSettings extends React.Component {
  state = {...DEFAULTS}

  componentDidMount() {
    this.setState(
      Object.assign(
        this.state, JSON.parse(localStorage.getItem('datetimeSettings'))
      ));
    
    localStorage.setItem('datetimeSettings', JSON.stringify(this.state));
  }

  handleDatetimeSettingsChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      localStorage.setItem('datetimeSettings', JSON.stringify(this.state));
    });
  }
  
  handleDatetimeChange = (type, datetimeKey) => {
    this.setState({ [type]: datetimeKey }, () => {
      localStorage.setItem('datetimeSettings', JSON.stringify(this.state));
    });
    this.props.toggleLocalStorageUpdated(); // lol
  }

  render() {
    const { localeData, numberSystemData, calendarData, hourCycleData } = selectData; 
    const { locale, numberSystem, calendar, hourCycle } = this.state; 
    const { date } = this.props;

    return (
      <LaunchpadWindow title="DATETIME Settings" componentName="DatetimeSettings">
        <DatetimeSettingsContainer>
          <TileColumn title="Locale">
            {localeData.map(data => (
              <Tile
                type={data.type}
                datetimeKey={data.datetimeKey}
                value={data.value}
                handleClick={this.handleDatetimeChange}
                isSelected={data.datetimeKey === locale}
                date={date}
              />
            ))}
          </TileColumn>
          <TileColumn title="Number System">
            {numberSystemData.map(data => (
              <Tile
                type={data.type}
                datetimeKey={data.datetimeKey}
                value={data.value}
                handleClick={this.handleDatetimeChange}
                isSelected={data.datetimeKey === numberSystem}
                date={date}
              />
            ))}
          </TileColumn>
          <TileColumn title="Calendar">
            {calendarData.map(data => (
              <Tile
                type={data.type}
                datetimeKey={data.datetimeKey}
                value={data.value}
                handleClick={this.handleDatetimeChange}
                isSelected={data.datetimeKey === calendar}
                date={date}
              />
            ))}
          </TileColumn>
          <TileColumn title="Hour Cycle">
            {hourCycleData.map(data => (
              <Tile
                type={data.type}
                datetimeKey={data.datetimeKey}
                value={data.value}
                handleClick={this.handleDatetimeChange}
                isSelected={data.datetimeKey === hourCycle}
                date={date}
              />
            ))}
          </TileColumn>
        </DatetimeSettingsContainer>
      </LaunchpadWindow>
    );
  }
}

export default DatetimeSettings; 