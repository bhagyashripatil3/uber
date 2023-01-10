import React from 'react'
import MobileLogin from '../components/MobileLogin'
import NavbarComponent from '../components/NavbarComponent'
export default function LoginPage() {
    return (
        <div>
            <NavbarComponent />
            <MobileLogin />
            <hr className='mx-2 my-5' />
        </div>
    )
}
