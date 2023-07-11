import Categories from 'pages/Categories';
import PageError from 'pages/Error';
import Favorite from 'pages/Favorite';
import Home from 'pages/Home';
import MyShelf from 'pages/MyShelf';
import Theme from 'pages/Theme';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext, AuthProvider } from 'context/auth';
import { useContext } from 'react';


export default function RoutesPage() {

  function Private({ children }) {
    const { authenticated } = useContext(AuthContext)

    if (!authenticated) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Theme></Theme>}>
            <Route index element={<Private><Home></Home></Private>} />
            <Route path="/favoritos" element={<Private><Favorite /></Private>} />
            <Route path="/categoria" element={<Private><Categories /></Private>}></Route>
            <Route path="/estante" element={<Private><MyShelf /></Private>} />
            <Route path="*" element={<Private><PageError /></Private>} />
          </Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
