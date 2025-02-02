'use client'

import React from 'react'
import axios from 'axios'

const SubscribePage = () => {
    const getCheckoutLink = async (pricingLookupKey: string) => {
        try {
            const response = await axios.post('http://localhost:8000/api/payments/get-checkout-link/', 
                { 
                    price_lookup_key: pricingLookupKey
                 },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            window.open(response.data.url, '_blank')
        }
        catch(error){
            console.error("error: ", error.response )
        }
    }

    return (
        <>
        <ul>
            <li>
                <button onClick = {() => getCheckoutLink('tier_one_monthly')}>
                    Tier 1
                </button>
            </li>
        </ul>
        </>
    )
}

export default SubscribePage