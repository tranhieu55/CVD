import React from 'react';
import Banner from '../components/Banner/BannerTestimonial';
import Layout from '../components/Layout';


export default function Testimonial() {
    return (
    <Layout location="/testimonial">
        <Banner></Banner>
        {/* <SliceZone allSlices={data.body} /> */}
    </Layout>
    )
}