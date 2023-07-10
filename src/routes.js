import Categories from 'pages/Categories';
import PageError from 'pages/Error';
import Favorite from 'pages/Favorite';
import Home from 'pages/Home';
import MyShelf from 'pages/MyShelf';
import Theme from 'pages/Theme';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Theme></Theme>}>
          <Route index element={<Home></Home>} />
          <Route path="/favoritos" element={<Favorite />} />
          <Route path="/categoria" element={<Categories />} />
          <Route path="/estante" element={<MyShelf />} />
          <Route path="*" element={<PageError />} />
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
