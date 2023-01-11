import React, { useState, useEffect } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button } from 'react-bootstrap'

export default function MobileLogin() {
    const [value, setValue] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    useEffect(() => {
        let phoneNumber = value
        if (phoneNumber.length >= 12) {
            setIsDisabled(false)
        }
    }, [value])

    return (
        <div className='row mx-5 my-5 align-items-center'>
            <PhoneInput
                defaultCountry='IN'
                placeholder="1234567890"
                value={value}
                onChange={setValue} />
            <Button
                variant='dark'
                className="my-3"
                onClick={() => window.location.href = "/home"}
                disabled={isDisabled}>Continue</Button>
        </div>

    )
}
