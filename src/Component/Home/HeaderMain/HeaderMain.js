import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import "./headermain.css";
import "./slider-animation.css"
// import carousel1 from "../../../images/insung-yoon-dRUqU4RpeOE-unsplash.jpg"
// import carousel2 from "../../../images/kumpan-electric-G1Xk2C87Rb8-unsplash.jpg"
// import carousel3 from "../../../images/zmorph-all-in-one-3d-printers-p1m4B-lhS9Y-unsplash.jpg"


const content = [
	{
		title: 'Repair Your Computer Laptop & Iphone',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Read More',
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Repair Your Computer Laptop & Iphone',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Repair Your Computer Laptop & Iphone',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const HeaderMain = () => {
    return (
        <Slider className="slider-wrapper">
        {content.map((item, index) => (
            <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
            >
                <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button className='btn-style'>{item.button}</button>
                </div>
            </div>
        ))}
    </Slider>
    );
};

export default HeaderMain;