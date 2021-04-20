import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit} = useForm()
    const onSubmit = data => {
        fetch('https://safe-cliffs-44982.herokuapp.com/admin',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=> console.log(res))
    
        console.log(data)
    };
   
    
    return (
        <div style={{backgroundColor:'lightgrey', borderRadius:'15px', margin:'20px'}}>
               <form className='p-3' onSubmit={handleSubmit(onSubmit)}>
               <input name="email"  className="form-control w-50 " defaultValue='example@exaple.com' ref={register} /> <br/>
                 <input className='btn btn-danger' type="submit" value='Make Admin' />
                 </form>
        </div>
    );
};

export default MakeAdmin;