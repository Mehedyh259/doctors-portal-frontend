import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const formattedDate = format(date, 'PP')


    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment is set , ${formattedDate} at ${slot}`);
                    refetch();
                } else {
                    toast.error(`You already have an appointent on , ${data.booking?.date} at ${data.booking?.slot}`)
                }
            })



        // to close modal
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl">Booking For: <span className='text-secondary'>{name}</span></h3>

                    <form onSubmit={handleBooking} className='my-4 grid grid-cols-1 gap-2 justify-items-center'>
                        <input type="text" disabled readOnly value={format(date, 'PP')} className="input w-full  max-w-md  input-bordered" />

                        <select name='slot' className="select select-bordered w-full max-w-md">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled defaultValue={user?.displayName || ''} className="input w-full  max-w-md  input-bordered" />

                        <input type="email" name='email' disabled defaultValue={user?.email || ''} className="input w-full  max-w-md  input-bordered" />

                        <input type="number" name='phone' placeholder='Enter Phone' className="input w-full  max-w-md  input-bordered" />


                        <input type="submit" value={'Submit'} className='btn btn-secondary text-white w-full max-w-md mt-3' />


                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;