import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signout from './pages/Signout';

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signout' element={<Signout />}></Route>
    </Routes>
  </BrowserRouter>
}
