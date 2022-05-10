import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import MainButton from '../Shared/MainButton';
const Appointment = () => {
    return (
        <section className=' my-28 flex justify-center items-center' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-130px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-4'>
                <h3 className="text-xl text-primary font-bold mb-3">
                    Appointment
                </h3>
                <h2 className="text-3xl mb-5">Make an Appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <MainButton>Get Started</MainButton>

            </div>
        </section>
    );
};

export default Appointment;