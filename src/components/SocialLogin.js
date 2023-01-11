import React from 'react'
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons'

export default function SocialLogin() {
    return (
        <div className='container'>
            <FacebookLoginButton onClick={() => alert("Hello")} className="my-3 mx-4" style={{width:'80%'}}>
                <span>Continue with facebook</span>
            </FacebookLoginButton>
            <GoogleLoginButton className="my-3 mx-4" style={{ width: '80%' }} onClick={() => alert("Hello")}>
                <span>Continue with google</span>
            </GoogleLoginButton>
        </div>
    )
}
