import React from 'react';
import { observer, inject } from 'mobx-react';
import { capitalize } from 'lodash';
import Select from 'mineral-ui/Select';
import Radio, { RadioGroup } from 'mineral-ui/Radio';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';
import { generateSelectData } from 'src/constants/intnl';

@inject('timestampStore')
@observer
class TimestampSettings extends React.Component {
  state = {
    selectedFormat: 'en',
    selectedLocale: 'en',
  }

  handleLocaleChange = (event) => {
    const { timestampStore } = this.props; 
    const selectedLocale = event.text; 

    this.setState({ selectedLocale });
    timestampStore.setLocale(selectedLocale);
  }

  handleFormatChange = (event) => {
    const { timestampStore } = this.props;
    const selectedFormat = event.target.value; 

    this.setState({ selectedFormat });
    timestampStore.setFormat(selectedFormat);
  }
  
  render() {
    const data = generateSelectData();

    return (
      <RadioGroup
        name="timestamp-settings"
        defaultChecked="formatted"
      >
        <Radio
          label="Local Date String"
          value="localeDateString"
          size="jumbo"
            onChange={this.handleFormatChange}
        />

        <Select onChange={this.handleLocaleChange} data={data} />

        {Object.keys(TIMESTAMP_FORMATS)
          .filter(name => name !== 'localeDateString')
          .map(format => (
            <Radio 
              key={format}
              label={capitalize(format)} 
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