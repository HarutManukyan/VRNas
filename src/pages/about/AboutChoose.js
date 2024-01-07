import { FaRegPlayCircle } from "react-icons/fa";

function AboutChoose() {
  return (
    <div className="about__choose">
      <h4 className="about__choose-subtitle">WHY CHOOSE US</h4>
      <h2 className="about__choose-title">
        Empowering Your Virtual Reality Experience
      </h2>
      <div className="home__top-bottom">
        <div>
          <div className="home__top-icon-container">
            <img
              className="home__top-icon"
              alt="icon"
              src="https://live.verstaem.online/vrnas/img/advantages/01.svg"
            />
          </div>
          <h3 className="home__top-bottom-title">Expertise</h3>
          <p className="home__top-bottom-text">
            Our team consists of experienced VR developers, designers, and
            technicians who have a passion for VR and a commitment to delivering
            quality work and give the best service
          </p>
        </div>
        <div>
          <div className="home__top-icon-container">
            <img
              className="home__top-icon"
              alt="icon"
              src="https://live.verstaem.online/vrnas/img/advantages/02.svg"
            />
          </div>
          <h3 className="home__top-bottom-title">Customization</h3>
          <p className="home__top-bottom-text">
            Every client is unique, and we believe every VR experience should be
            too. We'll work with you to create a customized solution that meets
            your specific needs and goals
          </p>
        </div>
        <div>
          <div className="home__top-icon-container">
            <img
              className="home__top-icon"
              alt="icon"
              src="https://live.verstaem.online/vrnas/img/advantages/03.svg"
            />
          </div>
          <h3 className="home__top-bottom-title">Service</h3>
          <p className="home__top-bottom-text">
            We believe in providing exceptional customer service, from initial
            consultation to final delivery. Our goal is to ensure you're
            satisfied with every aspect of your VR experience
          </p>
        </div>
      </div>

      <div className="home__choose">
        <div className="home__choose-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="931"
            height="786"
            viewBox="0 0 931 786"
            fill="none"
            className="home__choose-svg"
          >
            <g filter="url(#filter0_f_56_1618)">
              <path
                d="M460.984 249.725C610.801 249.725 720.12 149.681 720.12 267.69C720.12 385.7 327.402 575.398 177.585 575.398C27.7685 575.398 177.585 385.7 177.585 267.69C177.585 149.681 311.167 249.725 460.984 249.725Z"
                fill="url(#paint0_linear_56_1618)"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_56_1618"
                x="-99"
                y="0.141602"
                width="1029.12"
                height="785.257"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="105"
                  result="effect1_foregroundBlur_56_1618"
                />
              </filter>
              <linearGradient
                id="paint0_linear_56_1618"
                x1="144.457"
                y1="575.398"
                x2="178.214"
                y2="200.444"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1CC4F9" />
                <stop offset="1" stopColor="#FE69FE" />
              </linearGradient>
            </defs>
          </svg>
          <img
            className="home__choose-img"
            alt="person"
            src="https://live.verstaem.online/vrnas/img/choose/01.webp"
          />
          <div className="home__choose-video-container">
            <img
              className="home__choose-video"
              alt="video"
              src="https://live.verstaem.online/vrnas/img/choose/02.webp"
            />
            <FaRegPlayCircle className="home__choose-play" />
          </div>
        </div>
        <div className="home__choose-left">
          <h4 className="home__choose-subtitle">why choose us</h4>
          <h2 className="home__choose-title">
            Why Choose Us for Your VR Needs
          </h2>
          <div className="home__choose-dropdown">
            <h3 className="home__choose-dropdown-title home__choose-dropdown-title--1">
              Passionate and Experienced Team
            </h3>
            <h3 className="home__choose-dropdown-title home__choose-dropdown-title--2">
              Customized Solutions
            </h3>
            <h3 className="home__choose-dropdown-title home__choose-dropdown-title--3">
              Exceptional Customer Service
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutChoose;
