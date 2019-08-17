import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';

import WhoAreYou from './tabs/panels/whoAreYou';
import WhatAmI from './tabs/panels/whatAmI';
import WhatDateTimeIsItRightNow from './tabs/panels/whatDateTimeIsItRightNow';
import WhereAmIRightNow from './tabs/panels/whereAmIRightNow';
import ButWhy from './tabs/panels/butWhy';

import { SearchTrendsContainer } from './style';

class SearchTrends extends React.Component {
  state = {
    shouldAutoTab: true,
    selectedTabIndex: 0,
  }

  componentDidUpdate(prevProps) {
    if (!this.state.shouldAutoTab) return;
    const { currentSeconds } = this.props; 
    if (prevProps.currentSeconds === currentSeconds) return;

    this.setState({ selectedTabIndex: Math.floor((currentSeconds % 10) / 2)});
  }

  handleSelect = tabIndex => {
    this.setState({ shouldAutoTab: false });
    this.setState({ selectedTabIndex: tabIndex });
  }

  render() {
    const { selectedTabIndex } = this.state; 

    return(
      <LaunchpadWindow title="Search Trends">
        <SearchTrendsContainer>
          <Tabs selectedIndex={selectedTabIndex} onSelect={this.handleSelect}>
            <TabList>
              <Tab>WHO</Tab>
              <Tab>WHAT</Tab>
              <Tab>WHEN</Tab>
              <Tab>WHERE</Tab>
              <Tab>WHY</Tab>
            </TabList>

            <TabPanel><WhoAreYou /></TabPanel>
            <TabPanel><WhatAmI /></TabPanel>
            <TabPanel><WhereAmIRightNow /></TabPanel>
            <TabPanel><WhatDateTimeIsItRightNow /></TabPanel>
            <TabPanel><ButWhy /></TabPanel>
          </Tabs>
        </SearchTrendsContainer>
      </LaunchpadWindow>
    );
  }
}
export default SearchTrends; 
