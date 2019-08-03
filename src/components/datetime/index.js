import React from 'react';
import { observer, inject } from 'mobx-react';
import { css } from '@emotion/core';

import TIMESTAMP_FORMATS from 'src/constants/timestampFormats';

@inject('timestampStore')
@observer
class Datetime extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount = () => {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ date: new Date() });
  }

  render() {
    const { timestampStore } = this.props;
    const { date } = this.state;

    if (timestampStore.format !== TIMESTAMP_FORMATS.formatted) {
      return(
        <div css={css`font-size: 56px;`}>
          {timestampStore.output(date)}
        </div>
      ); 
    }

    return (
      <>
        <div>something</div>
      </>
    );
  }
}

export default Datetime; 
