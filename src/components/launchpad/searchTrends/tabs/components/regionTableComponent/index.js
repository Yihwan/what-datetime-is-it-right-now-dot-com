import React from 'react';

import { TableContainer, RegionTable } from './style';

const RegionTableComponent = ({ data }) => (
  <TableContainer>
    <RegionTable>
      <thead>
        <tr>
          <th>Region</th>
          <th>Interest <span>&#8595;</span></th>
        </tr>
      </thead>
      <tbody>
          {data.map(datapoint => (
            <tr>
              <td>{datapoint.region}</td>
              <td>{datapoint.interest}</td>
            </tr>
          ))}
      </tbody>
    </RegionTable>
  </TableContainer>
);

export default RegionTableComponent; 