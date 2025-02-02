'use client'; // Necessary for using React hooks and client-side behavior in Next.js components

import React from 'react';
import axios from 'axios';

const LogoutButton: React.FC = () => {
    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
            console.log("Sending refreshToken:", refreshToken);
            await axios.post(
                "http://localhost:8000/api/auth/logout/",
                { refresh: refreshToken },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                }
            );
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            window.location.href = "/login"; // Use relative paths for better portability
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
