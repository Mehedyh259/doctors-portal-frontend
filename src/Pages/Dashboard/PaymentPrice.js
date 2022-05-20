import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_KEY);
//('pk_test_51L0h4eELIpt3Jw7VcUqucXRt9uG1RjSspt9htxDObv0YG4wwY9KHcGd72WDXxgwBNP9MIMLDagvG0yycE1ALkSjO00cN8JsSOV');



const PaymentPrice = () => {
    const { appId } = useParams();
    const url = `http://localhost:5000/booking/${appId}`;

    const { data: appointment, isLoading } = useQuery(['booking', appId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }



    return (
        <div>
            <div class="card w-50 max-w-md mx-auto my-5 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className="text-red-600">Hello, {appointment?.patientName}</p>
                    <h2 class="card-title">Pay for <span className="text-secondary">{appointment?.treatment}</span></h2>
                    <p>We will see you on {appointment?.date} at {appointment?.slot} </p>
                    <p>please pay ${appointment?.price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>


            <div class="card w-75 max-w-md mx-auto bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>

        </div>
    );
};

export default PaymentPrice;