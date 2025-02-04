'use client'

import React from 'react'
import axios from 'axios'

const SubscribePage = () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const getCheckoutLink = async (pricingLookupKey: string) => {
        try {
            const response = await axios.post(`${API_URL}/api/payments/get-checkout-link/`, 
                { 
                    price_lookup_key: pricingLookupKey
                 }
            )
            window.open(response.data.url, '_blank')
        }
        catch(error){
            console.error("error: ", error.response )
        }
    }

    const runTest = async () => {
        const response = await axios.post(`${API_URL}/api/run-test/`)
        alert(response.data.message)
    }


    return (
        <>
        <ul>
            <li>
                <button onClick = {() => getCheckoutLink('tier_one_monthly')}>
                    Tier 1
                </button>
            </li>
            <li>    
                <button onClick = {() => runTest()}>
                    Run Test
                </button>
            </li>
        </ul>
        </>
    )
}

export default SubscribePage