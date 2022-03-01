import "./App.css";
import FeaturesArt from "./components/FeaturesArt";
import FilterSection from "./components/FilterSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function App() {
  const validUser = useSelector((state) => state.loggedIn);
  const navigate = useNavigate();

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
    </div>
  );
}

export default App;
