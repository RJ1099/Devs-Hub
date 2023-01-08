import React, { useState,useEffect } from 'react'
import { Link,Navigate } from 'react-router-dom'
import profile_img from './profile_img.png'
import './Assets/dashboard.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlug } from '@fortawesome/free-solid-svg-icons'
import { faSketch } from '@fortawesome/free-brands-svg-icons'

const Dashboard = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/allprofiles',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => setData(res.data))
    },[])

    if(!localStorage.getItem('token')){
        return <Navigate to={'/login'} />
    }

  return (
    <div>
        <div className='container-fluid'>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg fixed-top'>
                <Link to={'#'} className='navbar-brand'><FontAwesomeIcon icon={faSketch}/> Dashboard</Link>
                <div className='collapse navbar-collapse me-5'>
                    <ul className='navbar-nav text-white ms-auto'>
                        <li className='nav-item'>
                            <Link to={'/myprofile'} className='text-white btn btn-outline-success'>My Profile</Link>
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
            <p className='text-center body-text'><FontAwesomeIcon icon={faPlug}/> Browse and connect with the developers</p>
            <div>
            {
                    data.length>=1 ? 
                    data.map(profile => 
                        <div className='row mt-1 pt-4 profiles'>
                            <div className='col-8 dashboard-col-props bg-light m-auto'>
                                <img src={profile_img} class="rounded mx-auto d-block mt-3 dashboard-img" alt="user" />
                                <div className='profile'>
                                    <h4 className='text-center mt-3'>{profile.fullname}</h4>
                                    <p className='text-center'>{profile.email}</p>
                                    <Link to={`/viewprofile/${profile.fullname}/${profile.email}/${profile._id}`} className='btn btn-primary dashboard-btn'>view profile</Link>
                                </div>

                                <div className='list'>
                                    {profile.skill.split(",").map(skill => 
                                    <ul>
                                        <li><FontAwesomeIcon icon={faCheck}/>{skill}</li>
                                    </ul>
                                    )}
                                </div>
                            </div>
                        </div>) :
                        null
                }
            </div>
        </div>
    </div>
  )
}

export default Dashboard