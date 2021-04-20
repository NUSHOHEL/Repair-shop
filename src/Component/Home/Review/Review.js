/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import "./Review.css"

const Review = () => {
    const [reviews, setReviews]= useState([])
    useEffect(()=>{
        fetch('https://safe-cliffs-44982.herokuapp.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="text-center mt-5">
               <div className="testimonials-clean">
        <div className="container">
            <div className="intro">
                <h2 className="text-center">Testimonials </h2>
                <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
            </div>
            <div className="row people">
               {reviews.map(review=> <div className="col-md-6 col-lg-4 item">
                    <div className="box">
                        <p className="description">{review.description}</p>
                    </div>
                    <div className="author"><img className="rounded-circle" src={review.image}/>
                        <h5 className="name">{review.name}</h5>
                        <p className="title">{review.designation}</p>
                    </div>
                </div>)
               }
            </div>
        </div>
    </div>
        </div>
    );
};

export default Review;