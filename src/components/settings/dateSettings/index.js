import React from 'react';
import { observer, inject } from 'mobx-react';

/*

How to integrate locales? At top level or unit level? 


--- 
CALENDAR: 
LOCATION: 

FORMAT: 
DAY MONTH YEAR 
YEAR MONTH DAY
MONTH DAY YEAR

SHOW DAY OF WEEK: [CHECK]
Radio: at beginning, at end

MONTH SETTING:
DAY SETTING:
YEAR SETTING:
DAY OF WEEK SETTING:


*/
// @inject('dateStore')

@observer
class Date extends React.Component {

  render() {
    const { dateStore } = this.props;

    return (
      <>
        <div>Date settings</div>
        <button>number date</button>
        
      </>
    );
  }
}

export default Date; 
