import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import My_Profile from './My_Profile'
import Dashboard from './Dashboard'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Viewprofile from './Viewprofile'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/myprofile' element={<My_Profile/>} />
        <Route path='/viewprofile/:fullname/:email/:id' element={<Viewprofile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App