import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AreaChartContainer from '../../../components/areaChartContainer';

const InterestOverTime = () => {
  const { allWhatIsThisCsv } = useStaticQuery(
    graphql`
      query { 
        allWhatIsThisCsv {
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

  const data = allWhatIsThisCsv.edges.map(edge => (
    {
      name: edge.node.time,
      interest: parseInt(edge.node.interest, 10),
    }
  ));

  return <AreaChartContainer data={data} />;
}

export default InterestOverTime;