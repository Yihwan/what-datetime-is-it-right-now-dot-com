import React from 'react';
import { observer, inject } from 'mobx-react';
import { css } from '@emotion/core';

@inject('timestampStore')
@observer
class Timestamp extends React.Component {
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
    const { locale, format, numberSystem, calendar, hourCycle } = timestampStore; 
    const { date } = this.state;

    return (
      <div css={css`font-size: 56px;`}>
        {timestampStore.output(date)}
        {format === 'localeDateString' && ` // ${locale}`}
      </div>
    ); 
  }
}

export default Timestamp; 
