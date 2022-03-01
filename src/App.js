import "./App.css";
import $ from 'jquery';
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./styles/mystyle.css"
import "./styles/responsive.css"
import "./styles/price-range.css"
// import 'bootstrap/dist/js/bootstrap.js';
import Popper from 'popper.js';
import FeaturesArt from "./components/FeaturesArt";
import FilterSection from "./components/FilterSection";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const validUser = useSelector((state) => state.loggedIn);

  return (
    <div className="App">
      {validUser.login ? (
        <>
          <Header />
          <FeaturesArt />
          <FilterSection />
          <Footer />
        </>
      ) : (
        <div className="alert alert-danger" role="alert">
          <Link to="/login">Login </Link>|<Link to="/Register"> Register</Link>
        </div>
      )}

      {/* <Helmet>
        <script src="./scripts/jquery-3.2.1.slim.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript" />
        <script src="./scripts/custom.js"></script>
        <script src="./scripts/price-range.js"></script>
        <script src="./scripts/slider.js"></script>
      </Helmet> */}
    </div>
  );
}

export default App;
