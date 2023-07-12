import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { insertLogin, clientAPI } from 'services/client';

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

  async function login(email, password) {
    console.log('login auth', { email, password });

    try {
      const response = await insertLogin(email, password);
      console.log("login", response.data)

      const loggedUser = response.data.email
      const token = response.data.token

      localStorage.setItem('user', JSON.stringify(loggedUser));
      localStorage.setItem('token', JSON.stringify(token));

      clientAPI.defaults.headers.Authorization = `Bearer ${token}`

      setUser(loggedUser);
      navigate('/');

    }
    catch (error) {
      alert('moio')
    }

  }

  function logout() {
    console.log('logout');
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    clientAPI.defaults.headers.Authorization = null
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
