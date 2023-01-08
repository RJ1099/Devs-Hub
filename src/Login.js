import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import './Assets/login.css'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser,faLock} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [data,setData] = useState({
        'email' : '',
        'password' : '',
    })

    const [auth,setAuth]=useState(false);

    const changeHandler = e => {    
        setData({...data,[e.target.name]:e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res => {localStorage.setItem('token',res.data);setAuth(true)}
        )      
    }

    if(auth){
        return <Navigate to={'/dashboard'}/>
    }

  return (
    <div className='login-body'>
        <div >
            <h3 className='login-title'>Devs Hub</h3>
            <p className='login-text'>Devs Hub helps you connect with the best developers.</p>
        </div>
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-4 bg-white mt-5 col-props'>
                    <h2>Login</h2>
                    <form onSubmit={submitHandler}>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><FontAwesomeIcon icon={faUser}/></span>
                            <input type="text" class="form-control" placeholder="Username" name='email' onChange={changeHandler}/>
                        </div>

                        <div class="input-group mb-2">
                            <span class="input-group-text"><FontAwesomeIcon icon={faLock}/></span>
                            <input type="password" class="form-control" placeholder="password" name='password' onChange={changeHandler} />
                        </div>

                        <div className='d-grid mb-4'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </form>
                    <hr></hr>
                    <p className='text-center'>Don't have an account ?</p>
                    <Link className='btn btn-success register-btn mb-5' to='/register'>create new account</Link>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Login