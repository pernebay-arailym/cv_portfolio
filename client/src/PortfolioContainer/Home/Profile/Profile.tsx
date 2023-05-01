import Typewriter from "../../../components/Typewriter";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

const Profile = () => {
  const texts = ["Economist 📊", "Marketing 📈", "Business 💻", "Developer 👩‍💻"];

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/arailympernebay/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/arailymbkz/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'm <span className="highlighted-text">Arailym</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="highlighted-text">
              <h1>
                <Typewriter texts={texts} delay={100} />
              </h1>
              <span className="profile-role-tagline">
                Optimizing marketing, social media of your applications
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a href="Arailym_Pernebay__CV.pdf" download="Arailym_Pernebay__CV">
              <button className="btn highlighted-btn">Download CV</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
