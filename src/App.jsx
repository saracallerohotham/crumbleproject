import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import SignIn from "./pages/SignIn";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { CartProvider } from "./context";
import Destacadas from "./components/Destacadas";
import ProductList from "./components/ProductList";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {/* Solo se renderizan en la ruta principal */}
              <Destacadas />
              <ProductList />
            </Layout>
          }
        />
        <Route
          path="/cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/locations"
          element={
            <Layout>
              <Locations />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
      </Routes>
    </CartProvider>
  );
}

export default App;
