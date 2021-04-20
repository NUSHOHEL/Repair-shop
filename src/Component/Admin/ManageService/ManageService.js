
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const ManageService = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://safe-cliffs-44982.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(service)


    const deleteService = (id) => {
        fetch(`https://safe-cliffs-44982.herokuapp.com/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                console.log('deleted success');
            })
    }
   

    return (
        <div>
        <div className="table-responsive py-5">
            <table className="table table-bordered table-hover">
                <thead className="thead-dark text-left">
                    <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {
                    service?.map(sr => <tbody key={sr._id} className="text-left">
                        <tr>
                        <th scope="row">{sr.serviceName}</th>
                        <td>{sr.description} </td>
                        <td>{sr.price} </td>
                        <td>
                        <p><button onClick={() => deleteService(sr._id)} className="btn btn-danger ml-2">
                            <FontAwesomeIcon icon={faTrashAlt} />
                            </button></p>
                        </td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
                  
    </div>
    );
};

export default ManageService;