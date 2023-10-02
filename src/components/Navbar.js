import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import "./Navbar.css"


const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
  return (
    <div className="nav d-flex flex-row justify-content-space-between flex-start">
      <h1 className="heading ">Chat App</h1>
      {user ? <LogOut /> : <SignIn />}

    </div>
  );
};

export default Navbar;