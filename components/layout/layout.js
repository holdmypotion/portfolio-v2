import ScrollProgressBar from "../UI/scrollProgressBar";
import Footer from "./footer";
import MobileFooter from "./mobileFooter";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <div>
      <ScrollProgressBar />
      <Navbar />
      <MobileFooter />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
