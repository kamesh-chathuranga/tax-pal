import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import Feature from '../../components/Features/Feature'
import Service from '../../components/Service'
import CTA from '../../components/CTASection/CTA'
import Testimonial from '../../components/TestimonialSection/Testimonial'

const Home = () => {
  return (
    <Fragment>
        <Header />
        <Feature />
        <Service />
        <CTA />
        <Testimonial />
    </Fragment>
  )
}

export default Home