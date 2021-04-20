/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from 'react';
import './Dashboard.css'
import CheckOut from '../CheckOut/CheckOut';
import Review from '../Review/Review';
import NavBar from "../../Shared/NavBar/NavBar"
import AdminOrder from '../../Admin/OrderList/AdminOrder';
import UserOrder from '../OrderList/UserOrder';
import AddService from '../../Admin/AddService/AddService';
import MakeAdmin from '../../Admin/MakeAdmin/MakeAdmin';
import ManageService from '../../Admin/ManageService/ManageService';
import { UserContext } from '../../../App';


const Dashboard = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    const [admin, setAdmin] = useState(false)

    useEffect(() => {
        fetch('https://safe-cliffs-44982.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdmin(data)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="">
            <NavBar />
            <div className="border dashborad ">
                <div className="d-flex align-items-start">
                    {
                        admin ? <div style={{ width: '20%' }} className="nav flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#OrderList">Order List</button>


                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#AddService" >Add Service</button>


                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#MakeAdmin" >Make Admin</button>


                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#ManageService">Manage Service</button>
                        </div> : <div style={{ width: '20%' }} className="nav flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#cart">Cart</button>

                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#Orderlist" >Order List</button>

                            <button className="nav-link" data-bs-toggle="pill" data-bs-target="#Review" >Review</button>
                        </div>
                    }
                    <div style={{ width: '80%', marginLeft: '30px', background: '#f4f7fc', height: '100vh' }} className="tab-content" >


                        <div className="tab-pane fade show active" id="cart" aria-labelledby="cart-tab">
                            <CheckOut />
                        </div>
                        <div className="tab-pane fade" id="Orderlist" aria-labelledby="Orderlist-tab">
                            <UserOrder />

                        </div>
                        <div className="tab-pane fade" id="Review" aria-labelledby="Review-tab">
                            <Review />
                        </div>
                        <div className="tab-pane fade" id="OrderList" aria-labelledby="OrderList-tab">
                            <AdminOrder />
                        </div>
                        <div className="tab-pane fade" id="AddService" aria-labelledby="AddService-tab">
                            <AddService />
                        </div>
                        <div className="tab-pane fade" id="MakeAdmin" aria-labelledby="MakeAdmin-tab">
                            <MakeAdmin />
                        </div>
                        <div className="tab-pane fade" id="ManageService" aria-labelledby="ManageService-tab">
                            <ManageService />
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;