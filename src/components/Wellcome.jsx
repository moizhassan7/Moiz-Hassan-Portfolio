import React, { useRef } from "react";
import "../styles/Wellcome.css";
import VariableProximity from "../components/VariableProximity";
import ShinyText from "./ShinyText";

function Wellcome() {
  const containerRef = useRef(null);
  return (
    <div className="wellComeContainer">
      <div className="textArea">
        <div ref={containerRef} style={{ position: "relative" }}>
          <VariableProximity
            label="WELCOME TO MY PORTFOLIO"
            className="variable-proximity-demo"
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
          <p className="wellcomePara">
            <ShinyText
              text="Hey there! I'm a Web Developer who believes that great design and solid code are two sides of the same coin. I craft responsive and accessible websites and applications that deliver exceptional experiences. Dive into my portfolio to explore my work and see how I can help build your next project."
              disabled={false}
              speed={3}
              className="custom-class"
            />
          </p>
          <div className="homeNavigator">
            <a href="#home" className="modernBtn">
              <span>Learn More</span>
              <span className="btnIcon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="imageArea">
        <img
          src="https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/503602046_122212331852162023_1195050744545413_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=03AKnZ6N4DwQ7kNvwHrGiZ2&_nc_oc=Adk3BKWzxvEX_-QSGISPu_lxzmj34MWbXfE7Y6AfZ0ZjsV0MZpU_Ohl4f4p6cR3ITr5V4iC-KIKdOC5y8m15pNp0&_nc_zt=23&_nc_ht=scontent.flyp2-1.fna&_nc_gid=OOsDHWK3fi-MD1PpwM9o8Q&oh=00_Aff4in4mSv0JxFd4K3wL3oPAXcQTcKuiGmFLntrOOYHu2A&oe=690BA1D8"
          className="img1"
          alt="profile"
        />
        <img
          src="https://scontent.flyp2-1.fna.fbcdn.net/v/t39.30808-6/481079209_122194972550162023_7527564945490349303_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=qiIz3B2Zx9oQ7kNvwEoDhKY&_nc_oc=AdntD05OfphGcEuQ9BO6gfJGXJdAqs_fmZwB-dQUpazH5Q5g-fFW80UQIJVyr2Xt67adEweQdkmw6oPqEhWImtkQ&_nc_zt=23&_nc_ht=scontent.flyp2-1.fna&_nc_gid=yedRtxItu1rKlOJ1mGQGdQ&oh=00_Afd9dWOxz12H28ersgFPId54NFtJxoBZHUXyfAtmGkPkGQ&oe=690BBED2"
          className="img2"
          alt="profile 2"
        />
      </div>
    </div>
  );
}

export default Wellcome;
