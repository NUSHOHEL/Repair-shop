import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './PaymentForm';


const stripePromise = loadStripe('pk_test_51HZNkQBEspuFA8V0SJHuv7yto9ESLRDjC4nh8hJyPhFQJMFjG7zCwnadzx0GcsYnY0BJHetUlxz3e7EspZuIkuvQ00uENxpGaP');

const Payment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CardForm handlePayment={handlePayment} ></CardForm>
        </Elements>
    );
};

export default Payment;