import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const UserOrder = () => {
    const[orders, setOrders]=useState([])
    console.log(orders)
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://safe-cliffs-44982.herokuapp.com/order?email='+loggedInUser.email, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [loggedInUser.email])
    return (
        <div className='text-center mt-3'>
            <h1>Total Order:{orders.length}</h1>
            <div style={{margin:'20px'}} className="d-flex flex-wrap">
                {
                    orders?.map(order=> <div style={{width:'300px', boxShadow:'10px 10px 5px lightgrey', backgroundColor:'white', borderRadius:'10px'}} className="p-2 m-3" >
                            <div className="d-flex justify-content-between ">
                                <img style={{height:'50px', width:'50px', borderRadius:'50%'}} src={order.image} alt=""/>
                                <p className={order.status==="Pending"?'btn btn-danger':order.status==='Done'?"btn btn-success":order.status==='Ongoing'?'btn btn-warning':'btn'}>{order.status}</p>
                            </div>
                            <p>{order.description}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UserOrder;