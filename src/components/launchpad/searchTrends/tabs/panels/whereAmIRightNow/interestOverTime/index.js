import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AreaChartContainer from '../../../components/areaChartContainer';

const InterestOverTime = () => {
  const { allWhereAmIRightNowCsv } = useStaticQuery(
    graphql`
      query { 
        allWhereAmIRightNowCsv {
          edges {
            node {
              time, 
              interest 
            }
          }
        }
      }
    `
  );

  const data = allWhereAmIRightNowCsv.edges.map(edge => (
    {
      name: edge.node.time,
      interest: parseInt(edge.node.interest, 10),
    }
  ));

  return <AreaChartContainer data={data} />;
}

export default InterestOverTime;