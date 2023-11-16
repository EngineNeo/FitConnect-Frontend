import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        // Check if the cookie with auth token exists
        const token = Cookies.get('authToken');
        setAuthenticated(!!token);
    }, []);

    const login = (token) => {
        Cookies.set('authToken', token, { expires: 1 }); // Expires in 1 day
        setAuthenticated(true);
    };

    const logout = () => {
        Cookies.remove('authToken');
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
