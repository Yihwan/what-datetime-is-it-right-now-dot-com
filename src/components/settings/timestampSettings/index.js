import React from 'react';
import { observer, inject } from 'mobx-react';
import Select from 'mineral-ui/Select';
import Radio, { RadioGroup } from 'mineral-ui/Radio';
import { lowerCase } from 'lodash';

import { TIMESTAMP_NAMES } from 'src/constants/timestampFormats';
import { selectData } from 'src/constants/intnl';

@inject('timestampStore')
@observer
class TimestampSettings extends React.Component {
  handleFormatChange = event => {
    const { timestampStore: { setFormat } } = this.props;
    setFormat(event.target.value);
  }

  handleLocaleChange = event => {
    const { timestampStore: { setLocale } } = this.props; 
    setLocale(lowerCase(event.value));
  }

  handleNumberSystemChange = event => {
    const { timestampStore: { setNumberSystem } } = this.props;
    setNumberSystem(event.value);
  }

  handleCalendarChange = event => {
    const { timestampStore: { setCalendar } } = this.props;
    setCalendar(event.value);
  }

  handleHourCycleChange = event => {
    const { timestampStore: { setHourCycle } } = this.props;
    setHourCycle(event.value);
  }
  
  render() {
    return (
      <RadioGroup
        name="timestamp-settings"
        defaultChecked="localeDateString"
        size="jumbo"
      >
        <div>Timestamp Settings</div>
        <Radio
          label={TIMESTAMP_NAMES.localeDateString}
          value="localeDateString"
          onChange={this.handleFormatChange}
        />

        <Select 
          onChange={this.handleLocaleChange} 
          data={selectData.locale} 
          placeholder="Select locale ..."
        />

        <Select 
          onChange={this.handleNumberSystemChange} 
          data={selectData.numberSystem} 
          placeholder="Select number system ..."
        />

        <Select 
          onChange={this.handleCalendarChange} 
          data={selectData.calendar}
          placeholder="Select calendar type ..."
        />

        <Select 
          onChange={this.handleHourCycleChange} 
          data={selectData.hourCycle}
          placeholder="Select hour cycle type ..."
        />

        {Object.keys(TIMESTAMP_NAMES)
          .filter(name => name !== 'localeDateString')
          .map(format => (
            <Radio 
              key={format}
              label={TIMESTAMP_NAMES[format]} 
              value={format}
              size="jumbo"
              onChange={this.handleFormatChange}
            />
          ))}
      </RadioGroup>
    );
  }
}

export default TimestampSettings; 