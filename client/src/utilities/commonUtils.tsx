import AboutMe from "../PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "../PortfolioContainer/ContactMe/ContactMe";
import Home from "../PortfolioContainer/Home/Home";
import Resume from "../PortfolioContainer/Resume/Resume";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
    alreadyRendered: false,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  /*
  {
    screen_name: "Testimonial",
    component: Testimonial,
  },
  */
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
];
export const GET_SCREEN_INDEX = (screen_name: string) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};
