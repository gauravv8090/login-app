import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import Password from '../components/Password'
import Profile from '../components/Profile'
import Recovery from '../components/Recovery'
import Register from '../components/Register'
import Reset from '../components/Reset'
import Username from '../components/Username/Username'
// import Username from '../components/Username'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Username/>} ></Route>
            <Route path='/password' element={<Password/>} ></Route>
            <Route path='/profile' element={<Profile/>} ></Route>
            <Route path='/recovery' element={<Recovery/>} ></Route>
            <Route path='/register' element={<Register/>} ></Route>
            <Route path='/reset' element={<Reset/>} ></Route>
            <Route path='*' element={<PageNotFound/>} ></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes