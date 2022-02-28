import './App.css';
import FeaturesArt from './components/FeaturesArt';
import FilterSection from './components/FilterSection';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (

    <div className="App">
      <Header />
      <FeaturesArt />
      <FilterSection />
      <Footer />
    </div>

  );
}

export default App;
