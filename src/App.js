// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import "./App.css"

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className="container d-flex flex-row justify-content-space-between flex-start">
      <section className='section-cont'>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;

