import React from 'react';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import { COLORS } from 'src/constants/style';

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div>{`${label} : ${payload[0].value}`}</div>
    );
  }

  return null;
};

const AreaChartContainer = ({ data }) => (
  <AreaChart
    width={500}
    height={200}
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
  </AreaChart>
);

export default AreaChartContainer; 