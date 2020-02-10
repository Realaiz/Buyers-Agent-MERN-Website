import React, { useRef } from 'react'
import API from '../../API'

export default function Register(props) {

    const formRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        let formData = new FormData(formRef.current)

        API.post('/users/register', formData)
        .then((res) => {
            props.redirect('/dashboard')
        })
        .catch((err) => {
            console.log('oopsie', err)
        })
    }

    return (
        <form ref={formRef} onSubmit={onSubmit}>
            <label>Name: </label>
            <input type='text' name='name' />
            <label>Email: </label>
            <input type='text' name='email' />
            <label>Password: </label>
            <input type='password' name='password' />
            <label>Password Confirmation: </label>
            <input type='password' name='password2' />
            <button>Sign up</button>
        </form>
    )
}