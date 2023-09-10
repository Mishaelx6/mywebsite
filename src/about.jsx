import React, { useState, useEffect } from "react";
import JavaScriptProficiency from "./proficiency";
import HtmlProficiency from "./proficiency2"
import CSSProficiency from "./cssproficiency";
import { Element, animateScroll as scroll, scroller } from "react-scroll"; // Import the necessary components from react-scroll

function About() {
  const [activeTab, setActiveTab] = useState("skill");
  const [showProficiency, setShowProficiency] = useState(false);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    // Detect when the "About" section is in view and trigger the proficiency section
    const aboutSection = document.querySelector("#about");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setShowProficiency(true);
      }
    }, options);

    observer.observe(aboutSection);

    return () => observer.unobserve(aboutSection);
  }, []);

  return (
    <>
      <div className="about-col-2">
        <h1 className="sub-title">About me</h1>
        <p>
          I'm Mishael Johnson, I am a front end web Designer. I build
          appealing, well interactive and responsive website with HTML, CSS and
          Javascript websites. My websites codes are well structured as well as
          very simple to understand as I employ modern web Design techniques
          and also build with widely accepted frameworks and libraries.
        </p>
        <div className = "tab-container">
        <div className="tab-titles">
          <p
            className={`tab-links ${activeTab === "skill" ? "tab-active" : ""}`}
            onClick={() => handleClick("skill")}
          >
            Skills
          </p>
          <p
            className={`tab-links ${
              activeTab === "experience" ? "tab-active" : ""
            }`}
            onClick={() => handleClick("experience")}
          >
            Experience
          </p>
          <p
            className={`tab-links ${
              activeTab === "education" ? "tab-active" : ""
            }`}
            onClick={() => handleClick("education")}
          >
            Education
          </p>
        </div>
        <div
          id="skill"
          className={`tab-content ${activeTab === "skill" ? "active-tab" : ""}`}
        ><ul>
          <li>
              {" "}
              <span>Web Development</span> <br />
              Web app Development{" "}
            </li>
            <li>
              {" "}
              <span>Graphic Designer</span> <br />
              Complete Company Branding{" "}
            </li>
          </ul>
        </div>

        <div
          id="experience"
          className={`tab-content ${
            activeTab === "experience" ? "active-tab" : ""
          }`}
        >
          <ul>
            <li>
              {" "}
              <span>2021-2022</span> <br />
              Scovers Education{" "}
            </li>
            <li>
              {" "}
              <span>2022-date</span> <br />
              Freelance Web Developer{" "}
            </li>
            <li>
              {" "}
              <span>2021-date</span> <br />
              Freelance graphic designer{" "}
            </li>
          </ul>
        </div>
        <div
          id="education"
          className={`tab-content ${
            activeTab === "education" ? "active-tab" : ""
          }`}
        >
          <ul>
            <li>
              {" "}
              <span> Bsc Accounting</span> <br />
              Kogi State University 2012-2018{" "}
            </li>
            <li>
              {" "}
              <span>Tefl Certification</span> <br />
              TEFL 2019-2020{" "}
            </li>
            <li>
              {" "}
              <span>javascript Certification</span> <br />
              Web Development By Angela yu{" "}
            </li>
          </ul>

        </div>
        <Element name="about" >
        {showProficiency && <HtmlProficiency/>}
        { showProficiency && <CSSProficiency/>}
        {showProficiency && <JavaScriptProficiency />}
      </Element>

      </div>
      </div>


    </>
  );
}

export default About;
