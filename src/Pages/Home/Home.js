import React from 'react';
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
        </div>
    );
};

export default Home;