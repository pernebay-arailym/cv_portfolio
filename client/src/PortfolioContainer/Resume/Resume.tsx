import { useEffect, useState } from "react";
import Animations from "../../utilities/Animations";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import "./Resume.css";

const Resume = (props: any) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({ style: {} });

  let fadeInScreenHandler = (screen: any) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props: any) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {(props.fromDate || props.toDate) && (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg", key: "education" },
    {
      label: "Work History",
      logoSrc: "work-history.svg",
      key: "work-experience",
    },
    // { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    // { label: "Projects", logoSrc: "projects.svg" },
    { label: "Volunteering", logoSrc: "projects.svg", key: "volunteering" },
    { label: "Interests", logoSrc: "interests.svg", key: "interests" },
    {
      label: "Licences & Certifications",
      logoSrc: "programming-skills.svg",
      key: "licences&certification",
    },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Marketing", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Szechenyi Istvan University, Gyor, Hungary"}
        subHeading={`Master's degree of International Economy and Business`}
        description="Holder of Stipendium Hungaricum merit-based Scholarship"
        fromDate={"2021 "}
        toDate={"2023"}
      />
      <ResumeHeading
        heading={
          "Kazakh national university named Al-Farabi, Almaty, Kazakhstan"
        }
        subHeading={`Bachelor of Marketing at Department of Business Technology`}
        fromDate={"2017"}
        toDate={"2021"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"HESPERIUM MARKETING, UK, London"}
          subHeading={"Account executive"}
          fromDate={"November 2021"}
          toDate={"January 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">Responsibilities :</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Provide marketing service;
          </span>
          <br />
          <span className="resume-description-text">
            - Daily connection with 15 clients;
          </span>
          <br />
          <span className="resume-description-text">
            - Call and conclude an agreement with foreign companies;
          </span>
          <br />
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"IFORTIS WORLWIDE, American Ruler Private Limited, India"}
          subHeading={"Marketer Sales Intern"}
          fromDate={"September 2021"}
          toDate={"October 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">Responsibilities :</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Created presentations for busines subjects
          </span>
          <br />
          <span className="resume-description-text">
            - Assisted with business plan development
          </span>
        </div>
        <br />
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"AiPlus educational center, Nur-Sultan, Kazakhstan"}
          subHeading={"English language trener"}
          fromDate={"November 2020"}
          toDate={"August 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">Responsibilities :</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Preparing 4-5-6 grade pupils for national exam for NIS and RPMS
          </span>
          <br />
          <span className="resume-description-text">
            - Work with psychological mindset of children
          </span>
          <br />
          <span className="resume-description-text">
            - Increased the results of monthly tests by 25%
          </span>
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"Alyssa a Hogan Enterprise, Florida, USA"}
          subHeading={"Marketer/Content writer intern"}
          fromDate={"July 2020"}
          toDate={"August 2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">Responsibilities :</span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Conducted market research and analyzed current tends
          </span>
          <br />
          <span className="resume-description-text">
            - Created content for social media platforms, including LinkedIn and
            Facebook
          </span>
          <br />
          <span className="resume-description-text">
            - Assisted with business plan development
          </span>
        </div>
        <br />
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    /*<div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    */

    /* PROJECTS */
    /*
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    */
    <div className="resume-screen-container" key="volunteering">
      <ResumeHeading
        heading={"Community Volunteer"}
        subHeading={"UNICEF"}
        description={"Children"}
        fromDate={"Sep 2020"}
        toDate={""}
      />
      <ResumeHeading
        heading={"Content Specialist, Marketer"}
        subHeading={"Solidarity Tracks"}
        description={"Arts and Culture"}
        fromDate={"May 2022"}
        toDate={"Jul 2022"}
      />
      <ResumeHeading
        heading={"Volunteer"}
        subHeading={"Synergy Global Forum"}
        fromDate={"Oct 2018"}
        toDate={""}
      />
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="licences&certifications">
      <ResumeHeading
        heading="Write Professional Emails in English"
        subHeading={"Georgia Institure of Technology"}
        description="Issued Jan 2021 Credential ID X8DPTL8RSSU6"
      />
      <ResumeHeading
        heading="Teach English now ! Foundational principles"
        subHeading={"Arizona State University"}
        description="Issued Dec 2020 Credential ID BX669LRCLMYP"
      />
      <ResumeHeading
        heading="English for career development"
        subHeading={"University of Pennsylvania"}
        description="Issued May 2020"
      />
    </div>,
  ];

  const handleCarousal = (index: number) => {
    let offsetHeight = 400;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
