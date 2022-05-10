import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import ServiceHero from './ServiceHero';
import Services from './Services';

const Home = () => {
    return (
        <div className=' px-7 lg:px-12'>
            <Banner />
            <Info />
            <Services />
            <ServiceHero />
            <Appointment />
        </div>
    );
};

export default Home;