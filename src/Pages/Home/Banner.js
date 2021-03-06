import React from 'react';
import chair from '../../assets/images/chair.png'
import MainButton from '../Shared/MainButton';

const Banner = () => {
    return (
        <div className="hero lg:min-h-screen bg-hero-pattern">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:max-w-lg sm:max-w-sm lg:ml-5 rounded-lg shadow-2xl" alt='..' />
                <div className='md:text-center sm:text-center lg:text-left'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <MainButton>Get Started</MainButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;