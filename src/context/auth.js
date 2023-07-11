import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    function login(email, password) {
        console.log('login auth', { email, password });

        if (password === 'secret') {
            setUser({ id: '123', email });
            navigate('/');
        }
    }

    function logout() {
        console.log('logout');
        setUser(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider
            value={{ authenticated: Boolean(user), user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}
