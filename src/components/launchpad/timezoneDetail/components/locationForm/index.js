import React from 'react';
import Select from 'react-select';
import moment from 'moment';
import 'moment-timezone';

import { customSelectStyles, LocationFormContainer, SelectButton } from './style';

const TIMEZONES = moment.tz.names().map(tz => (
  { key: tz, value: tz, label: tz }
));

class LocationForm extends React.Component {
  state = {
    searchOptions: TIMEZONES,
    selectedTimezone: null, 
  }

  customFilter = ({ value }, query) => (
    value.toLowerCase().replace(/[^a-zA-]+/g, '')
      .includes(query.toLowerCase().replace(/[^a-zA-]+/g, ''))
  )

  handleSelectChange = selectedOption => {
    this.setState({ selectedTimezone: selectedOption.value })
  }

  handleSubmit = () => {
    const { selectNewLoc } = this.props; 
    const { selectedTimezone } = this.state; 

    selectNewLoc(selectedTimezone);
  }
  
  render() {
    const { searchOptions, selectedTimezone } = this.state; 

    return(
      <LocationFormContainer>
        <Select
          isSearchable
          filterOption={this.customFilter}
          onChange={this.handleSelectChange}
          options={searchOptions}
          styles={customSelectStyles}
        />
        <SelectButton disabled={!selectedTimezone} onClick={this.handleSubmit}>Add Timezone</SelectButton>
      </LocationFormContainer>
    );
  }
}

export default LocationForm;