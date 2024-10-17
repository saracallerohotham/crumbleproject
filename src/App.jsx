import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { CartProvider } from "./context";
import Home from "./pages/home/Home.jsx";
import SignIn from "./pages/siginPage/SignIn.jsx";
import Locations from "./pages/Locations/Locations.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Cart from "./pages/cartPage/Cart.jsx";
import ErrorPage from "./pages/error/ErrorPage.jsx";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
