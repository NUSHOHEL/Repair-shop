import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const [image, setimage]=useState(null)
  const onSubmit = data => {
    console.log(data)
    const service = {
      serviceName: data.name,
      description:data.description,
      price: data.price,
      image:image
    }
    console.log(service)
    fetch('https://safe-cliffs-44982.herokuapp.com/addService',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(service)
    })
    .then(res=> console.log(res))
  };

  const uploadImage= e =>{
    console.log(e.target.files[0])
    const imageData = new FormData();
    imageData.set('key', 'ec5df63c40b68c2c294edde73f94d744');
    imageData.append('image', e.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setimage(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  console.log(image)
    return (
        <div className=" m-5" style={{borderRadius:'15px',backgroundColor:'lightgrey'}}>
            <form className= "w-50 p-3" onSubmit={handleSubmit(onSubmit)}>
      <input className="form-control" name="name" placeholder="name" ref={register} /> <br/>
      <input className="form-control"  name="price" placeholder="price" ref={register} /> <br/>
      <input className="form-control"  name="description" placeholder="description" ref={register} /> <br/>

      <input type="file" className="form-control" name="image" onChange={uploadImage} /> <br/>
      
      <input className="btn btn-primary" type="submit" />
    </form>
        </div>
    );
};

export default AddService;