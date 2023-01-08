import React from 'react';
import { Link } from 'react-router-dom';
import './Assets/home.css';
import devs_hub from './devs_hub.jfif';
import deloitte from './deloitte_logo.svg';
import facebook from './facebook_logo.svg';
import fujitsu from './fujitsu_logo.svg';
import google from './google_logo.svg';
import ibm from './ibm_logo.svg';
import nasa from './nasa_logo.svg';
import telstra from './telstra_logo.svg';
import amazon from './amazon_logo.svg';
import airbus from './airbus_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcAmazonPay, faFacebook, faInstagram, faSketch, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faUser,faLock, faMagnifyingGlass, faTruckFast, faBriefcase, faBarsProgress, faPenToSquare, faHandshakeAngle} from '@fortawesome/free-solid-svg-icons'


const Home = () => {
  return (
    <div className='body'>
        <div className='container-fluid'>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to={'/'} className='navbar-brand'><FontAwesomeIcon icon={faSketch}/> Devs Hub</Link>

                <div className='collapse navbar-collapse me-5'>
                    <ul className='navbar-nav text-white ms-auto'>
                        <li className='nav-item'>
                            <Link to={'/register'} className='text-white btn btn-outline-success'>Register</Link>
                        </li> &nbsp; &nbsp;
                        <li className='nav-item'>
                            <Link to={'/login'} className='text-white btn btn-outline-success'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div className='container-fluid'>
            <div className='row mt-3'>
                <div className='col'>
                    <img src={devs_hub} alt='devs_hub' />
                </div>
                <h1 className='home-title'>Hire the best developers for any job, online.</h1>
                <ul className='home-list'>
                    <li>World's largest developers marketplace</li>
                    <li>Any job you can possibly think of</li>
                    <li>Save up to 90% & get quotes for free</li>
                    <li>Pay only when you're 100% happy</li>
                </ul>
            </div>

            <div className='row mt-4'>
                <div className='col logos-flex'>
                    <h4 className=' text-muted'>As used by</h4>
                    <img src={deloitte} alt='deloitte' style={{"width":"100px","height":"50px"}}/>
                    <img src={facebook} alt='facebook'style={{"width":"100px","height":"50px"}}/>
                    <img src={fujitsu} alt='fujitsu'style={{"width":"100px","height":"50px"}}/>
                    <img src={google} alt='google'style={{"width":"100px","height":"50px"}}/>
                    <img src={ibm} alt='ibm'style={{"width":"100px","height":"50px"}}/>
                    <img src={nasa} alt='nasa'style={{"width":"100px","height":"50px"}}/>
                    <img src={telstra} alt='telstra'style={{"width":"100px","height":"50px"}}/>
                    <img src={amazon} alt='amazon'style={{"width":"100px","height":"50px"}}/>
                    <img src={airbus} alt='airbus'style={{"width":"100px","height":"50px"}}/>
                </div>
            </div>



            <hr></hr>

            <div className='row mt-5'>
                <h1>Need something done?</h1>
                <div className='col-3 mt-5 column-1-text'>
                    <h3 className='text-center col1-h2'><FontAwesomeIcon icon={faBriefcase}/> Post a job</h3>
                    <p>
                        Its free and easy to post a job. Simply fill in a title, description 
                        and budget and competitive bids come within minutes.
                    </p>
                </div>

                <div className='col-3 mt-5 column-1-text'>
                <h3 className='text-center col1-h2'><FontAwesomeIcon icon={faPenToSquare}/>Choose Devs</h3>
                    <p>No job is too big or too small. We've got developers for jobs of any size 
                        or budget, across 1800+ skills. No job is too complex. We can get it done!
                    </p>
                </div>

                <div className='col-3 mt-5 column-1-text'>
                <h3 className='text-center col1-h2'><FontAwesomeIcon icon={faCcAmazonPay}/> Pay safely</h3>
                    <p>Only pay for work when it has been completed and you're 100% satisfied with 
                        the quality using our milestone payment system.
                    </p>
                </div>

                <div className='col-3 mt-5 column-1-text'>
                <h3 className='text-center col1-h2'> <FontAwesomeIcon icon={faHandshakeAngle}/>We’re here to help</h3>
                    <p>
                        Our talented team of recruiters can help you find the best freelancer for 
                        the job and our technical co-pilots can even manage the project for you.
                    </p>
                </div>
            </div>

            <hr></hr>

            <div className='row mt-5'>
                <h1>What's great about it?</h1>
                <div className='col-3 mt-5'>
                    <h3 className='text-center'><FontAwesomeIcon icon={faMagnifyingGlass}/> Browse portfolios</h3>
                    <p>Find professionals you can trust by browsing their samples of previous work 
                        and reading their profile reviews.
                    </p>
                </div>

                <div className='col-3 mt-5'>
                <h3 className='text-center'><FontAwesomeIcon icon={faTruckFast}/> Fast bids</h3>
                    <p>Receive obligation free quotes from our talented developers fast. 80% of 
                        projects get bid on within 60 seconds.
                    </p>
                </div>

                <div className='col-3 mt-5'>
                <h3 className='text-center'><FontAwesomeIcon icon={faBriefcase}/> Quality work</h3>
                    <p>Devs Hub has by far the largest pool of quality developers globally- 
                        over 50 million to choose from.
                    </p>
                </div>

                <div className='col-3 mt-5 mb-5'>
                <h3 className='text-center'><FontAwesomeIcon icon={faBarsProgress}/> Track Progress</h3>
                    <p>Keep up-to-date and on-the-go with our time tracker, 
                        and mobile app. Always know what devs are up to.
                    </p>
                </div>
            </div>

            <div>
            <section className='footer'>
                <div className='row'>
                    <div className='col'>
                        <ul className='text-center d-flex justify-content-center m-5 lead'>
                            <li className='m-2 p-2'>Home</li>
                            <li className='m-2 p-2'>Features</li>
                            <li className='m-2 p-2'>Pricing</li>
                            <li className='m-2 p-2'>FAQs</li>
                            <li className='m-2 p-2'>About</li>
                        </ul>
                        <hr></hr>
                        <p className='text-center'>&copy; 2023 Company, Inc. All rights reserved</p>
                        <p className='text-center mb-2' style={{"color":"black"}}><FontAwesomeIcon icon={faInstagram}/> <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faFacebook}/> </p>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </div> 
  )
}

export default Home