import React from 'react'
import MobileLogin from '../components/MobileLogin'
import NavbarComponent from '../components/NavbarComponent'
import SocialLogin from '../components/SocialLogin'
import TermsandConditions from '../components/terms/TermsandConditions'
export default function LoginPage() {
    return (
        <div>
            <NavbarComponent />
            <h5 className='text-justify mx-3 my-4'>Some Attractive message</h5>
            <MobileLogin />
            <hr className='mx-2 my-5' />
            <SocialLogin />
            <TermsandConditions />
        </div>
    )
}
