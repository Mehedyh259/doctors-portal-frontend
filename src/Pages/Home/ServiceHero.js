import React from 'react';
import treatment from '../../assets/images/treatment.png'
import MainButton from '../Shared/MainButton';

const ServiceHero = () => {
    return (
        <div className="hero mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <img width={458} height={576} src={treatment} alt='...' />
                <div className='lg:ml-7'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;