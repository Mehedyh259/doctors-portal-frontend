import React from 'react';
import MainButton from '../Shared/MainButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-full justify-center bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>

                <p>{

                    slots.length
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try Another Date !</span>
                }</p>

                <p>
                    {slots.length ? slots.length : "No "} {slots.length > 1 ? "Spaces " : "Space "} Available
                </p>
                <div className="card-actions justify-center">
                    <label
                        for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className='btn btn-secondary text-white uppercase my-4'>
                        Book Appointment
                    </label>


                </div>
            </div>
        </div>
    );
};

export default Service;