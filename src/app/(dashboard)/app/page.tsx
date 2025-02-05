'use client'

import React from 'react'
import { useRouter } from 'next/navigation'; // Next.js router for navigation
import LogoutButton from '../../../components/LogoutButton'
import CustomerPortalButton from '../../../components/CustomerPortalButton'

const AppPage = () => {
    const router = useRouter(); // Replacing useNavigate with useRouter

    const handleNavigate = () => {
        router.push('/journal'); // Navigate to the /canvas page
    };

    return(
        <>
        <h3>Welcome!</h3>
         <button onClick={ handleNavigate }>Start Writing</button>
         <CustomerPortalButton />
         <LogoutButton />
        </>
    )
}

export default AppPage