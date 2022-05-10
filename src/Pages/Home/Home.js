import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import ServiceHero from './ServiceHero';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className=' px-7 lg:px-12'>
            <Banner />
            <Info />
            <Services />
            <ServiceHero />
            <Appointment />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;