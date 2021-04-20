import React, { useEffect, useState } from 'react';

const AdminOrder = () => {
    const [orders, setOrders] = useState([])
    console.log(orders)
    useEffect(() => {
        fetch('https://safe-cliffs-44982.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    
    const updateStatus= (status, id)=>{
        const updateinfo = {id, status}
        console.log(updateinfo)
        fetch(`https://safe-cliffs-44982.herokuapp.com/update/${id}`,{
            method:"PATCH",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(updateinfo)
        })
        .then(res => res.json())
        .then(data=> console.log(data) )
    }
    return (
        <div className='text-center mt-3'>
            <h1>Total Order : {orders.length}</h1>
            <div>
                <div className="table-responsive py-5">
                    <table className="table table-bordered table-hover">
                        <thead className="thead-dark text-left">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">PayWith</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order => <tbody key={order._id} className="text-left">
                                <tr>
                                <th scope="row">{order.name}</th>
                                <td>{order.email} </td>
                                <td>{order.service} </td>
                                <td>{order.paymentType}</td>
                                <td>
                                    <select onChange={(e)=>updateStatus(e.target.value, order._id)} >
                                        <option selected={order.status ==='Pending'} >Pending</option>
                                        <option selected={order.status ==='Ongoing'} >Ongoing</option>
                                        <option selected={order.status ==='Done'}>Done</option>
                                    </select>
                                </td>
                                </tr>

                            </tbody>)
                        }
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AdminOrder;