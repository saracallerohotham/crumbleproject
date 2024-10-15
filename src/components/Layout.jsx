import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Destacadas from "./Destacadas";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Destacadas />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fbcfe8"
            fillOpacity="0.45"
            d="M0,224L40,202.7C80,181,160,139,240,128C320,117,400,139,480,176C560,213,640,267,720,250.7C800,235,880,149,960,138.7C1040,128,1120,192,1200,213.3C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <ProductList />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
