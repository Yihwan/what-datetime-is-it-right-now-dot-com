import React from 'react';
import {
  Radar, RadarChart, PolarGrid, ResponsiveContainer, 
} from 'recharts';

import LaunchpadWindow from 'src/shared-components/launchpadWindow';
import { COLORS } from 'src/constants/style';

import { RadarClockContainer, Label } from './style';

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
    const { date } = this.props; 

    const elapsedSeconds = date.getSeconds(); 
    const remainingSeconds = 60 - elapsedSeconds;

    const elapsedMinutes = date.getMinutes();
    const remainingMinutes = 60 - elapsedMinutes; 

    const elapsedHours = date.getHours();
    const remainingHours = 24 - elapsedHours;

    return(
      <LaunchpadWindow title="The Circle of Time" componentName="RadarClock">
        <Label topPercent="18%" leftPercent="77%" color={COLORS.blooberbOrange}>
          Elapsed Seconds (ES) <span>{elapsedSeconds}</span>
        </Label>
        <Label topPercent="78%" leftPercent="11%" color={COLORS.blooberbOrange}>
          Remaining Seconds (RS) <span>{remainingSeconds}</span>
        </Label>
        <Label topPercent="18%" leftPercent="10%" color={COLORS.greenL1}>
          Elapsed Minutes (EM) <span>{elapsedMinutes}</span>
        </Label>
        <Label topPercent="78%" leftPercent="72%" color={COLORS.greenL1}>
          Remaining Minutes (RM) <span>{remainingMinutes}</span>
        </Label>
        <Label topPercent="48%" leftPercent="8%" color={COLORS.red}>
          Remaining Hours (RH) <span>{remainingHours}</span>
        </Label>
        <Label topPercent="48%" leftPercent="79%" color={COLORS.red}>
          Elapsed Hours (EH) <span>{elapsedHours}</span>
        </Label>
        <RadarClockContainer>
          <ResponsiveContainer width="100%" height="100%" >
            <RadarChart innerRadius={7} outerRadius={100} data={data}>
              <PolarGrid gridType="circle" />
              <Radar isAnimationActive={false} name="currentSeconds" dataKey="seconds" stroke={COLORS.blooberbOrange} fill={COLORS.blooberbOrange} fillOpacity={0.6} />
              <Radar isAnimationActive={false} name="currentMinutes" dataKey="minutes" stroke={COLORS.greenL1} fill={COLORS.green} fillOpacity={0.6} />
              <Radar isAnimationActive={false} name="currentHours" dataKey="hours" stroke={COLORS.red} fill={COLORS.red} fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </RadarClockContainer>
      </LaunchpadWindow>
    );
  }
}

export default RadarClock;
