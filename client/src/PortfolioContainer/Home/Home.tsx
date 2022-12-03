import Footer from "./Footer/Footer";
import "./Home.css";
import Profile from "./Profile/Profile";

const Home = () => {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;