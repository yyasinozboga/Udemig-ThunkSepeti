import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/actions/resActions";
import { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Restaurant from "./pages/RestaurantDetail";
import Products from "./pages/Products";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants/:id" element={<Restaurant />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
