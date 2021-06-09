import React from 'react'
import Layout from '../../components/Layout';
import SEO from '../../components/utilities/SEO';
import SliceZone from '../../utils/SliceZone';

function PageTemplate(props){
    const data = props;
  return (
    <Layout>
    <SEO props={data.pageContext.dataLayout}></SEO>
    <SliceZone allSlices={data.pageContext.dataLayout.body}></SliceZone>
  </Layout>
  )

}
export default PageTemplate

