'use client'; // Required for client-side hooks and `window`

import React from 'react';
import axios from 'axios';

const CustomerPortalButton: React.FC = () => {
    const handleClick = async () => {
        try {
            const response = await axios.post(
                'http://localhost:8000/api/payments/get-customer-portal-link',
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );
            window.open(response.data.url, '_blank');
        } catch (error) {
            console.error("Error opening customer portal: ", error);
        }
    };

    return <button onClick={handleClick}>Update Billing</button>;
};

export default CustomerPortalButton;
