import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faLock, faEnvelope, faPhone, faMugHot} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
    const [data,setData] = useState({
        'fullname' : '',
        'email' : '',
        'mobile' : '',
        'skill' : '',
        'password' : '',
        'confirmPassword' : '',
    })

    const {fullname,email,mobile,skill,password,confirmPassword} = data

    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value});  
    } 


    const submithandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
            res => alert(res.data)
        )
    }

  return (
    <div>
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-4 bg-light m-auto'>
                    <h2 className='text-center mt-2'>Signup</h2>
                    <p className='text-center text-muted'>It's Free and Takes a Minute</p>
                    <form onSubmit={submithandler}>
                        <div class="input-group mb-2">
                            <span class="input-group-text"><FontAwesomeIcon icon={faUser}/></span>
                            <input type="text" class="form-control" placeholder="username" name='fullname' onChange={changeHandler}/>
                        </div>

                        <div class="input-group mb-2">
                            <span class="input-group-text"><FontAwesomeIcon icon={faEnvelope}/></span>
                            <input type="email" class="form-control" placeholder="email address" name='email' onChange={changeHandler}/>
                        </div>

                        <div class="input-group mb-2">
                            <span class="input-group-text"><FontAwesomeIcon icon={faPhone}/></span>
                            <input type="text" class="form-control" placeholder="mobile" name='mobile' onChange={changeHandler}/>
                        </div>

                        <div class="input-group">
                            <span class="input-group-text"><FontAwesomeIcon icon={faMugHot}/></span>
                            <input type="text" class="form-control" placeholder="skills" name='skill' onChange={changeHandler}/>
                            <p className='text-center'> Please provide skills by separation of comma (,)</p>
                        </div>

                        <div class="input-group mb-2">
                            <span class="input-group-text"><FontAwesomeIcon icon={faLock}/></span>
                            <input type="password" class="form-control" placeholder="password" name='password' onChange={changeHandler}/>
                        </div>
                        
                        <div class="input-group mb-2">
                            <span class="input-group-text"><FontAwesomeIcon icon={faLock}/></span>
                            <input type="password" class="form-control" placeholder="confirm password" name='confirmPassword' onChange={changeHandler}/>
                        </div>

                        <div className='d-grid'>
                            <input type='submit' className='btn btn-primary' value='Register'/>
                            <a href='/login' className='text-center mt-3 mb-4'>Already have an account ?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register