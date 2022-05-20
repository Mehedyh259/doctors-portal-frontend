import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';

const CheckoutForm = ({ appointment }) => {

    const elements = useElements()
    const stripe = useStripe();
    const [cardSuccess, setCardSuccess] = useState('');
    const [cardError, setCardError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false)


    const { _id, price, patient, patientName } = appointment;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: card
        });
        setCardError(error?.message || '');
        setCardSuccess('');
        setProcessing(true);
        // confirm card payment

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient
                    },
                },
            },
        );

        if (intentError) {
            setProcessing(false)
            setCardError(intentError?.message)
        } else {
            setCardError('');
            console.log(paymentIntent);
            setTransactionId(paymentIntent?.id)
            setCardSuccess('Your payment is completed !!');

            const payment = {
                appointment: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    console.log(data);
                })

        }


    }


    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='btn mt-3 btn-sm btn-accent text-white' type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                </form>
                {
                    cardError && <p className='my-2 text-white bg-red-600 p-2 rounded'>Error: {cardError}</p>
                }
                {
                    cardSuccess && <div className='my-2 text-white bg-green-600 p-2 rounded'>
                        <p>Success: {cardSuccess}</p>
                        <p>transactionID: <b>{transactionId}</b></p>
                    </div>
                }
            </div>
        </>
    );
};

export default CheckoutForm;