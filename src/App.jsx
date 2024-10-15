import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Destacadas from "./components/Destacadas";
import ProductList from "./components/ProductList";
import SignIn from "./pages/SignIn";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { CartProvider } from "./context";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Destacadas />
                <ProductList />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
