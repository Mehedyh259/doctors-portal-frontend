import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import ServiceHero from './ServiceHero';
import Services from './Services';
import Testimonials from './Testimonials';
import MakeAppointment from './MakeAppointment';

const Home = () => {
    return (
        <div >
            <Banner />
            <Info />
            <Services />
            <ServiceHero />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;