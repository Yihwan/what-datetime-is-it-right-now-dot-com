import React from 'react';
import Select from 'react-select';
import Modal from 'react-modal';
import 'moment-timezone';

Modal.setAppElement('#___gatsby');

class LocationForm extends React.Component {
  state = {
    searchOptions: [
      { value: 'America/Santiago', label: 'America/Santiago' },
      { value: 'America/Denver', label: 'America/Denver' },
      { value: 'America/Sao_Paulo', label: 'America/Sao_Paulo' },
      { value: 'Asia/Seoul', label: 'Asia/Seoul' },
      { value: 'Europe/Copenhagen', label: 'Europe/Copenhagen' },
      { value: 'Pacific/Honolulu', label: 'Pacific/Honolulu' },
    ],
    selectedTimezone: null, 
    isModalOpen: false, 
  }
  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
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
    this.closeModal();
  }
  
  render() {
    const { searchOptions, selectedTimezone, isModalOpen } = this.state; 

    return(
      <>
        <button onClick={this.openModal}>Add new location</button>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
        >
          <Select
            isSearchable
            filterOption={this.customFilter}
            onChange={this.handleSelectChange}
            options={searchOptions}
          />
          <button disabled={!selectedTimezone} onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </>
    );
  }
}

export default LocationForm;