import "./App.css";
import Footer from "./PortfolioContainer/Home/Footer/Footer";
import Home from "./PortfolioContainer/Home/Home";
import Profile from "./PortfolioContainer/Home/Profile";

const App = () => {
  return (
    <div className="App">
      <Profile />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
