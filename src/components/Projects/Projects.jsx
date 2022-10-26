import React, {useContext} from "react";
import "./Portfolio.css";
import "swiper/css";
import {themeContext} from "../../Context";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import b1 from "../../img/bitrixfiles/bitrix1home.png";
import b2 from "../../img/bitrixfiles/bitrix2signup.png";
import b3 from "../../img/bitrixfiles/bitrix3feeds.png";

const Project = () => {
  const theme = useContext(themeContext);

  // const darkMode = theme.state.darkMode;
  return (
    <div className="Project" id="portfolio">
      <h1>Projects</h1>

      <div className="gridDiv">
        <div className="projetbox">
          <div className="sliderbox">
            <Carousel fade className="corosa" >
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="textdata">
            <p>Bitrix24 Clone</p>
            <p><span className="highlight">
            About : 
            </span>
          This is a clone of Bitrix24 website. From Homepage,
              Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing
              Status, Calendar Todos-Adding-Deleting. We have cloned every
              functionalities.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>


          </div>

          <div className="btns">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="projetbox">
          <div className="sliderbox">
            <Carousel fade className="corosa" variant="dark">
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="textdata">
            <p>Bitrix24 Clone</p>
            <p><span className="highlight">
            About : 
            </span>
          This is a clone of Bitrix24 website. From Homepage,
              Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing
              Status, Calendar Todos-Adding-Deleting. We have cloned every
              functionalities.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>


          </div>

          <div className="btns">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="projetbox">
          <div className="sliderbox">
            <Carousel fade className="corosa" variant="dark">
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={b3} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="textdata">
            <p>Bitrix24 Clone</p>
            <p><span className="highlight">
            About : 
            </span>
          This is a clone of Bitrix24 website. From Homepage,
              Login&SignUp to Feeds-Update, Tasks Adding-Deleting-Changing
              Status, Calendar Todos-Adding-Deleting. We have cloned every
              functionalities.
            </p>
            <p><span className="highlight">Tech stack : </span> REACT | React-Router-Dom | Chakra-ui | NodeJs | Express | MongoDB</p>


          </div>

          <div className="btns">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Project;
