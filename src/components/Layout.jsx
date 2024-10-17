import PropTypes from "prop-types";
import Footer from "./Footer";
import { Navbar } from "./Navbar";


const Layout = ({ children }) => {
  return (
    <>
    <header>
      <Navbar />
    </header>
      <main className="mt-20">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
