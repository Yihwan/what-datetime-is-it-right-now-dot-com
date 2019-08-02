import React from 'react';
import moment from 'moment';

class IndexPage extends React.Component {
  render() {
    return(
      <div>{moment().format()}</div>
    );
  }
}

export default IndexPage;
