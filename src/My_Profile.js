import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import profile_img from './profile_img.png'
import axios from 'axios'
import './Assets/myProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faSketch } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons'

const My_Profile = () => {
    const [data,setData] = useState(null)
    const [review,setReview] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/myprofile',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data))

        axios.get('http://localhost:5000/myreview',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setReview(res.data))

    },[])


    if(!localStorage.getItem('token')){
        return <Navigate to={'/login'}/>
    }
  return (
    <div>
        <div className='container-fluid'>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg fixed-top'>
                <Link to={'#'} className='navbar-brand'><FontAwesomeIcon icon={faSketch}/> My Profile</Link>
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
                    {data && 
                        <div className='profile-skills'>
                            <ul>
                                <li className='skills mb-1'><FontAwesomeIcon icon={faUser}/> {data.fullname}</li>
                                <li className='skills mb-1'><FontAwesomeIcon icon={faEnvelope}/> {data.email}</li>
                                <li className='skills mb-1'><FontAwesomeIcon icon={faPhone}/> {data.mobile}</li>
                            </ul>
                        </div>
                    } 
                </div>
            </div>
            
            <div className='row mt-2 pt-4 profiles-row-2'>
                <div className='col-6 m-auto profiles-col-2'>
                    <h3 className='pt-2 text-muted'><FontAwesomeIcon icon={faStar}/> Review & Rating</h3>
                    {
                    review.length >=1 ?
                    review.map(review =>
                        <div className='review-box mb-4'>
                            <h5 className='text-muted ms-2'>Task Provider : {review.taskProvider}</h5>
                            <h5 className='text-muted ms-2'>Rating : {review.rating}/5</h5>
                        </div>) : 
                        <div className='review-box mb-2'>
                             <h5 className='text-muted ms-2'>No Ratings & Reviews Added yet</h5>
                    </div>
                    }      
                </div>
            </div>
        </div>
    </div>
  )
}

export default My_Profile