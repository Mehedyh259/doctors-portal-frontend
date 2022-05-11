import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl">Booking For: <span className='text-secondary'>{name}</span></h3>

                    <form onSubmit={handleBooking} className='my-4 grid grid-cols-1 gap-2 justify-items-center'>
                        <input type="text" disabled readOnly value={format(date, 'PP')} className="input w-full  max-w-md  input-bordered" />

                        <select name='slot' className="select select-bordered w-full max-w-md">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder='Enter Name' className="input w-full  max-w-md  input-bordered" />

                        <input type="email" name='email' placeholder='Enter Email' className="input w-full  max-w-md  input-bordered" />

                        <input type="number" name='phone' placeholder='Enter Phone' className="input w-full  max-w-md  input-bordered" />


                        <input type="submit" value={'Submit'} className='btn btn-secondary text-white w-full max-w-md mt-3' />


                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;