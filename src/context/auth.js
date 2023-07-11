import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //created to control useEffect as it is asynchronous

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    recoveredUser && setUser(JSON.parse(recoveredUser));

    setLoading(false);
  }, []);

  function login(email, password) {
    console.log('login auth', { email, password });

    const loggedUser = {
      id: '123',
      email,
    };

    localStorage.setItem('user', JSON.stringify(loggedUser));

    if (password === 'secret') {
      setUser(loggedUser);
      navigate('/');
    }
  }

  function logout() {
    console.log('logout');
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: Boolean(user), user, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
