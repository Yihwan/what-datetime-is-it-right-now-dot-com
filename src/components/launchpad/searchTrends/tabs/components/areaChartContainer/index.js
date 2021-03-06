import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';

import { COLORS } from 'src/constants/style';

import { AreaChartWrapper } from './style';

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div>{`${label} : ${payload[0].value}`}</div>
    );
  }

  return null;
};

const AreaChartContainer = ({ data }) => (
  <AreaChartWrapper>
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <AreaChart

        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorTrend" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={COLORS.blueL1} stopOpacity={0.8} />
            <stop offset="95%" stopColor={COLORS.blueL1} stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis hide dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Area
          isAnimationActive={false}
          dataKey="interest"
          stroke={COLORS.blueD1}
          fill="url(#colorTrend)"
        />
        <CartesianGrid strokeDasharray="3 3" stroke={COLORS.grey}/>
      </AreaChart>
    </ResponsiveContainer>
  </AreaChartWrapper>
);

export default AreaChartContainer; 