import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Kabab from "./pages/CotegoryPages/Kabab";
import Navbar from "./Components/Navbar";
import CartDrawer from "./Components/CartDrawer";
// import Footer from "./Components/Footer";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <Navbar setOpenCart={setOpenCart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Kabab />} />
      </Routes>

      <CartDrawer open={openCart} setOpen={setOpenCart} />
    </>
  );
};

export default App;
