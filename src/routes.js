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
import { QueryClient, QueryClientProvider } from 'react-query'



export default function RoutesPage() {

  const queryClient = new QueryClient()

  function Private({ children }) {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div>Carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<Theme></Theme>}>
              <Route
                index
                element={
                  <Private>
                    <Home></Home>
                  </Private>
                }
              />
              <Route
                path="/favoritos"
                element={
                  <Private>
                    <Favorite />
                  </Private>
                }
              />
              <Route
                path="/categoria"
                element={
                  <Private>
                    <Categories />
                  </Private>
                }
              ></Route>
              <Route
                path="/estante"
                element={
                  <Private>
                    <MyShelf />
                  </Private>
                }
              />
              <Route
                path="*"
                element={
                  <Private>
                    <PageError />
                  </Private>
                }
              />
            </Route>
            <Route path="/login" element={<Login></Login>}></Route>
          </Routes>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
