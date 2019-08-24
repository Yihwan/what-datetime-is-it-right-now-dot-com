import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import RegionTableComponent from '../../../components/regionTableComponent';

const InterestByGeography = () => {
  const { allButWhySubRegionCsv } = useStaticQuery(
    graphql`
      query { 
        allButWhySubRegionCsv {
          edges {
            node {
              region,
              interest 
            }
          }
        }
      }
    `
  );

  const data = allButWhySubRegionCsv.edges.filter(edge => edge.node.interest).map(edge => (
    {
      region: edge.node.region,
      interest: parseInt(edge.node.interest, 10),
    }
  ));

  return <RegionTableComponent data={data} />;
}

export default InterestByGeography;