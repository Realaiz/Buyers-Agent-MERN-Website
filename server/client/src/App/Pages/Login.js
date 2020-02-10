import React, { useRef } from 'react'
import API from '../../API'

export default function Login(props) {

    const formRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        let formData = new FormData(formRef.current)

        API.post('/users/login', formData)
        .then((res) => {
            props.redirect('/dashboard')
        })
        .catch((err) => {
            console.log('oopsie', err)
        })
    }

    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <label>Email: </label>
            <input type='text' name='email' />
            <label>Password: </label>
            <input type='password' name='password' />
            <button>Login</button>
        </form>
    )
}