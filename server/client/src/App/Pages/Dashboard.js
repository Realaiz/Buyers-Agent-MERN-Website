import React, { useEffect, useState, useRef } from 'react'
import API from '../../API'

import '../styleSheets/Dashboard.css'

export default function Dashboard(props) {

    const [cities, setCities] = useState([])

    const formRef = useRef()

    useEffect(() => {
        API.get('/city')
        .then(res => {
            setCities(res.data)
        })
    }, [])

    const onSubmit = e => {
        e.preventDefault()
        let formData = new FormData(formRef.current)
        API.post('/city', formData)
        .then(res => {
            setCities([...cities, res.data])
        })
    }

    return (
        <div className='Dashboard' >
            {cities.map(city => (
                <div>
                    <span>Name: {city.name}</span>
                    <span>Location: {city.preferences && city.preferences.location}</span>
                    <span>Min price: {city.preferences && city.preferences.minprice}</span>
                    <span>Max Price: {city.preferences && city.preferences.maxprice}</span>
                </div>
            ))}
            <form ref={formRef} onSubmit={onSubmit}>
                <div>
                    <label>Name: </label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label>Location: </label>
                    <input type='text' name='preferences[location]' />
                </div>
                <div>
                    <label>Min Price: </label>
                    <input type='text' name='preferences[minprice]' />
                </div>
                <div>
                    <label>Max Price: </label>
                    <input type='text' name='preferences[maxprice]' />
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}