import React from 'react'; 
import { Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import Users from './components/Login/Users';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      {/* <EveryWhere /> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/users' element={<Users />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
