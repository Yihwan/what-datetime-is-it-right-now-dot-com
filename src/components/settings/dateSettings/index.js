import React from 'react';
import { observer, inject } from 'mobx-react';
import Button from 'mineral-ui/Button';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';

/*

How to integrate locales? At top level or unit level? 

SUPPORTED FORMATS: 
Intl.DateTimeFormat
SHOW: MONTH, DAY, YEAR, DAY OF WEEK, TIME ZONE

FORMAT AND ORDER: 
MONTH DAY YEAR DAY
You can also add text

MONTH SETTING: 
DAY SETTING: 
YEAR SETTING: 
DAY OF WEEK SETTING: 

SHOW TIMEZONE: YES/NO 
SELECT TIMEZONE: 

*/
// @inject('dateStore')
@observer
class Date extends React.Component {

  render() {
    const { dateStore } = this.props;

    return (
      <>
        <button>number date</button>
        <button>full date</button>
      </>
    );
  }
}

export default Date; 
