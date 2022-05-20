import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                        toast.error('Invalid access !!');
                    }

                    return res.json()
                })
                .then(data => setAppointments(data))
        }
    }, [user])

    return (
        <div>
            <h2 className="text-2xl mb-3 text-accent">My Appointments </h2>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments?.map((appointment, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.treatment}</td>
                                <td>
                                    {(appointment.price && !appointment.paid) && <Link to={`/dashboard/payment/${appointment._id}`} >
                                        <button className='btn btn-xs btn-success'>
                                            Pay
                                        </button>
                                    </Link>}
                                    {
                                        (appointment.price && appointment.paid) && <div>
                                            <p className="text-success font-bold">Paid</p>
                                            <p>TransactionID: <span className="text-success">
                                                {appointment.transactionId}
                                            </span></p>
                                        </div>
                                    }

                                </td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;