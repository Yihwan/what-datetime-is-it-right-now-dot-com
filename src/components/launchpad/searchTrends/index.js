import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import WhoAreYou from './tabs/panels/whoAreYou';
import WhatIsThis from './tabs/panels/whatIsThis';
import WhatDateTimeIsItRightNow from './tabs/panels/whatDateTimeIsItRightNow';
import WhereAmIRightNow from './tabs/panels/whereAmIRightNow';
import ButWhy from './tabs/panels/butWhy';

import { SearchTrendsContainer } from './style';

class SearchTrends extends React.Component {
  state = {
    selectedTabIndex: 0,
  }

  handleSelect = tabIndex => {
    this.setState({ selectedTabIndex: tabIndex });
  }

  render() {
    const { selectedTabIndex } = this.state; 

    return(
      <LaunchpadWindow 
        title="Search Trends" 
        componentName="SearchTrends"
      >
        <SearchTrendsContainer>
          <Tabs selectedIndex={selectedTabIndex} onSelect={this.handleSelect}>
            <TabList>
              <Tab>Who</Tab>
              <Tab>What</Tab>
              <Tab>When</Tab>
              <Tab>Where</Tab>
              <Tab>Why</Tab>
            </TabList>

            <TabPanel><WhoAreYou searchTerm="who are you" /></TabPanel>
            <TabPanel><WhatIsThis searchTerm="what is this" /></TabPanel>
            <TabPanel><WhatDateTimeIsItRightNow searchTerm="what date time is it right now" /></TabPanel>
            <TabPanel><WhereAmIRightNow searchTerm="where am i right now" /></TabPanel>
            <TabPanel><ButWhy searchTerm="but why" /></TabPanel>
          </Tabs>
        </SearchTrendsContainer>
      </LaunchpadWindow>
    );
  }
}
export default SearchTrends; 
