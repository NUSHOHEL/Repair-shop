import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';


const Review = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
      const {photoURL, email, name}=loggedInUser;
        console.log(data)
        const review = {
          name,
          email,
          image:photoURL,
          designation:data.company,
          description:data.review,

        }
        console.log(review)
        fetch('https://safe-cliffs-44982.herokuapp.com/addReview',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify(review)
          })
          .then(res=> console.log(res))
    }
    return (
        <div className=' ms-4 mt-5 bg-dark p-3 m-5' style={{borderRadius:'10px'}}>
            <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
      <input name="name"  className="form-control " defaultValue={loggedInUser.name} ref={register} /> <br/>
      <input name="company" className="form-control " placeholder="Company Or Designation" ref={register} /> <br/>
      <textarea name="review" placeholder="Write you review Here" className="form-control"  rows="3" ref={register}/>  <br/>
      
      <input type="submit" className='btn btn-danger' value="Submit" />
    </form>
        </div>
    );
};

export default Review;