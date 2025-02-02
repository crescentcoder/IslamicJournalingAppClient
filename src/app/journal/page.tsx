'use client';

import React, { useRef, useState } from 'react'
import axios from 'axios'

const JournalPage = () => {
    const inputRef = useRef(null)
    const [responseValue, setResponseValue] = useState('')

    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault()

        const inputValue = inputRef.current.value

        try{
            const response = await axios.post(`http://127.0.0.1:8000/api/testing/`, 
            { 
                writing: inputValue 

            },
            {
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}` 
                }
            }
        )
            setResponseValue(response.data.message)
        }
        catch(error){
            console.error('Error sending data', error.response ? error.data : error.message)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <textarea ref={inputRef} />
                <button type="submit">Finish Writing and Request Analysis</button>
            </form>
            {responseValue && <p>{responseValue}</p>}
        </div>
    )
}

export default JournalPage