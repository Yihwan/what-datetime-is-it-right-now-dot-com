import React from 'react';
import {
  Radar, RadarChart, PolarGrid, 
} from 'recharts';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';
import { COLORS } from 'src/constants/style';

import { RadarClockContainer } from './style';

const dataSetup = [...Array(60)].map((_, idx) => (
  {marker: idx, seconds: 0, minutes: 0, hours: 0}
)); 

class RadarClock extends React.Component {
  state = {
    data: dataSetup,
  }

  componentDidUpdate(prevProps) {
    const { date } = this.props; 
    const lastSeconds = prevProps.date.getSeconds();
    const currentSeconds = date.getSeconds(); 

    if (lastSeconds === currentSeconds) return;

    const currentMinutes = date.getMinutes();
    const currentHours = date.getHours();

    let newData = [...this.state.data];

    if (currentSeconds === 0) {
      newData = newData.map(data => {
        data.seconds = 0;
        return data; 
      })
    }
    newData[currentSeconds].seconds = 4;

    if (currentMinutes === 0) {
      newData = newData.map(data => {
        data.minutes = 0;
        return data;
      })
    }
    newData[currentMinutes].minutes = 3;

    const formattedHours = (currentHours % 12) * 5;
    if (formattedHours === 0) {
      newData = newData.map(data => {
        data.hours = 0;
        return data;
      })
    }
    newData[formattedHours].hours = 2;
    
    this.setState({ data: newData });
  }

  render() {
    const { data } = this.state; 

    return(
      <LaunchpadWindow title="Time Wheel Indicating Current Time">
        <RadarClockContainer>
          <RadarChart innerRadius={7} outerRadius={100} width={250} height={250} data={data}>
            <PolarGrid gridType="circle" />
            <Radar isAnimationActive={false} name="currentSeconds" dataKey="seconds" stroke={COLORS.blooberbOrange} fill={COLORS.blooberbOrange} fillOpacity={0.6} />
            <Radar isAnimationActive={false} name="currentMinutes" dataKey="minutes" stroke={COLORS.greenL1} fill={COLORS.green} fillOpacity={0.6} />
            <Radar isAnimationActive={false} name="currentHours" dataKey="hours" stroke={COLORS.red} fill={COLORS.red} fillOpacity={0.6} />
          </RadarChart>
        </RadarClockContainer>
      </LaunchpadWindow>
    );
  }
}

export default RadarClock;
