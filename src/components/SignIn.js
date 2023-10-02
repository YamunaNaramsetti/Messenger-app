import React from 'react'
import GoogleButton from 'react-google-button'
import "./SignIn.css"

import {auth} from '../firebase'
import {GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'



const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className="wrapper">
        <GoogleButton onClick={googleSignIn} />
    </div>
  )
}

export default SignIn