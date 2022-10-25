import React, {useContext} from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import {themeContext} from "../../Context";
import {Link} from "react-scroll";
import wavefotter from "../../img/bottom_header.svg";
import profile from "../../img/dip.jpg";
import linkdin from "../../img/Social logos/linkedin11.png";
import github11 from "../../img/Social logos/github111.png";
import mail from "../../img/Social logos/email111.png";
import telephone from "../../img/Social logos/telephone.png";

const Intro = () => {
  // Transition
  const transition = {duration: 2, type: "spring"};

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="contentdiv">
        <div className="namediv">
          <h2>Hey  Im, </h2>
          <h1>Dipak Pawar</h1>
          <h3> Full Stack Web Developer</h3>
          <div className="introicons">
            <img  src={linkdin} alt="" />
            <img src={github11} alt="" />
            <img src={mail} alt="" />
            <img src={telephone} alt="" />
          </div>

          <div className="btndiv">
            <button>RESUME 👁</button>
            <button>Dawonlod</button>
          </div>
        </div>

        <div className="herodiv">
          <img className="heroimg" src={profile} alt="" />
        </div>
      </div>

      <img className="waveintro" src={wavefotter} alt="" />
      <img className="waveintro1" src={wavefotter} alt="" />
    </div>
  );
};

export default Intro;
