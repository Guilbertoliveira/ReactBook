import App from "App";
import Categories from "pages/Categories";
import Favorite from "pages/Favorite";
import Home from "pages/Home";
import MyShelf from "pages/MyShelf";
import Theme from "pages/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function RoutesPage() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Theme></Theme>}>
                    <Route index element={<Home></Home>} />
                    <Route path="/favorite" element={<Favorite />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/myshelf" element={<MyShelf />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}