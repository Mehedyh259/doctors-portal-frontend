import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 gap-5'>
            <InfoCard
                cardTitle="Openning Hours"
                bgclassName="bg-gradient-to-r from-secondary to-primary"
                img={clock} />


            <InfoCard
                cardTitle="Our Locations"
                bgclassName="bg-accent"
                img={marker} />

            <InfoCard
                cardTitle="Contact Us"
                bgclassName="bg-gradient-to-r from-primary to-secondary"
                img={phone} />
        </div>
    );
};

export default Info;