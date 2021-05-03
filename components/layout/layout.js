import Footer from "./footer";
import MobileFooter from "./mobileFooter";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      {/* {props.children} */}
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default Layout;
