import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';

const CheckOut = () => {
    const { name } = useParams();
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [selectedService, setSelectedService] = useState([])
    const {  description, image } = selectedService;
    const [formdata, setFormData] = useState(null)
    console.log(formdata)


    const onSubmit = data => {
        setFormData(data)

    }
    const handlePayment = paymentID => {
        const orderDetails = { ...formdata,
             ...loggedInUser,
              orderTime: new Date(), 
              paymentID, 
              image, 
              description,
            status:'Pending',
        paymentType:'Credit Card' }
        console.log(orderDetails)
        fetch('https://safe-cliffs-44982.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    useEffect(() => {
        fetch(`https://safe-cliffs-44982.herokuapp.com/service/${name}`)
            .then(res => res.json())
            .then(data => setSelectedService(data))
    }, [name])
    return (
        <div >
            <div style={{display: formdata ? 'none': 'block', borderRadius:'10px', backgroundColor:'lightgrey'}} className=' ms-4 mt-5  p-3 m-5'>
                <form className='w-5' onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control w-50" name="name" defaultValue={loggedInUser.name} ref={register} /> <br />
                    <input className="form-control w-50" name="email" defaultValue={loggedInUser.email} ref={register} /> <br />
                    <input className="form-control w-50" name="service" defaultValue={name} ref={register} /> <br />

                    <input type="submit" className='btn btn-danger' value="Next" />
                </form>

            </div>

            <div style={{display: formdata ? 'block': 'none', borderRadius:'10px', backgroundColor:'lightgrey'}}
            className=' ms-4 mt-5  p-3 m-5'>
                <Payment handlePayment={handlePayment} />
            </div>
        </div>
    );
};

export default CheckOut;