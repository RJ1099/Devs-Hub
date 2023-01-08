import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import profile_img from './profile_img.png'
import './Assets/viewProfiles.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { faEnvelope, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Viewprofile = () => {
    let params = useParams()

    const[rating,setRating] = useState(null);
    const[taskProvider,setTaskProvider] = useState(null);

    const submitHandler = e => {
        axios.get('http://localhost:5000/myprofile',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setTaskProvider(res.data.fullname))

        let review = {
            taskProvider,
            taskWorker : params.id,
            rating
        }

        axios.post('http://localhost:5000/addreview',review,{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => alert(res.data))
    }


    if(!localStorage.getItem('token')){
        return <Navigate to={'/login'}/>
    }

  return (
    <div>
        <div className='container-fluid'>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg fixed-top'>
                <Link to={'#'} className='navbar-brand'><i class="fa-brands fa-sketch"></i> View Profile</Link>
                <div className='collapse navbar-collapse me-5'>
                    <ul className='navbar-nav text-white ms-auto'>
                        <li className='nav-item'>
                            <Link to={'/dashboard'} className='text-white btn btn-outline-success'>Dashboard</Link>
                        </li> &nbsp; &nbsp;
                        <li className='nav-item'>
                            <Link to={'/login'} className='text-white btn btn-outline-success' 
                            onClick={()=> localStorage.removeItem('token')}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div className='container-fluid'>
            <div className='row mt-5 pt-4 profiles-row-1'>
                <div className='col-6 m-auto profiles-col-1'>
                    <img src={profile_img} class="my-profile-img" alt="user" />
                        <div className='profile-skills'>
                            <ul>
                                <li className='skills mb-1'><FontAwesomeIcon icon={faUser} /> {params.fullname} </li>
                                <li className='skills mb-1'><FontAwesomeIcon icon={faEnvelope} />  {params.email} </li>
                            </ul>
                        </div>
                </div>
            </div>

            <div className='row mt-3 pt-3 profiles-row-1'>
                <div className='col-6 m-auto profiles-col-2'>
                        <h3 className='pt-2 text-muted'><FontAwesomeIcon icon={faStar} />  Want to give a Review? Add Review here</h3>
                        <div className='add-review-box'>
                        <form onSubmit={submitHandler}>
                            <input type="text" placeholder="Enter your rating out of 5" name='fullname' 
                            onChange={e => setRating(e.target.value)} className='input-field-text' required/> <br/>
                            <input type='submit' value='Add Review' className='input-btn'/>
                        </form>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewprofile