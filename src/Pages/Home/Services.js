import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import SingleService from './SingleService';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse minima cum quam, ab deleniti culpa distinctio recusandae repellendus voluptates est.',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse minima cum quam, ab deleniti culpa distinctio recusandae repellendus voluptates est.',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse minima cum quam, ab deleniti culpa distinctio recusandae repellendus voluptates est.',
            img: whitening
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map((service) => <SingleService
                        key={service._id}
                        service={service}
                    />)
                }
            </div>

        </div>
    );
};

export default Services;