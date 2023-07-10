import { createContext } from "react";
import { useState } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    function login(email, password) {
        console.log('login auth', { email, password })
        setUser({ id: '123', email })
    }

    function logout() {
        console.log('logout')
    }

    return (
        <AuthContext.Provider value={{ authenticated: Boolean(user), user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}