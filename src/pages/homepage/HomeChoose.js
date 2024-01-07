import { FaRegPlayCircle } from "react-icons/fa";

function HomeChoose() {
  return (
    <div className="home__choose">
      <div className="home__choose-left">
        <h4 className="home__choose-subtitle">why choose us</h4>
        <h2 className="home__choose-title">Why Choose Us for Your VR Needs</h2>
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
      <div className="home__choose-right">
        <img
          className="home__choose-img"
          alt="person"
          src="https://live.verstaem.online/vrnas/img/choose/01.webp"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="837"
          height="785"
          viewBox="0 0 837 785"
          fill="none"
          className="home__choose-svg"
        >
          <g filter="url(#filter0_f_33_35)">
            <path
              d="M559.374 249.515C708.93 249.515 818.059 149.645 818.059 267.449C818.059 385.253 426.025 574.621 276.469 574.621C126.913 574.621 276.469 385.253 276.469 267.449C276.469 149.645 409.819 249.515 559.374 249.515Z"
              fill="url(#paint0_linear_33_35)"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_33_35"
              x="0"
              y="0"
              width="1028.06"
              height="784.621"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="105"
                result="effect1_foregroundBlur_33_35"
              />
            </filter>
            <linearGradient
              id="paint0_linear_33_35"
              x1="243.399"
              y1="574.621"
              x2="277.097"
              y2="200.32"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1CC4F9" />
              <stop offset="1" stop-color="#FE69FE" />
            </linearGradient>
          </defs>
        </svg>
        <div className="home__choose-video-container">
          <img
            className="home__choose-video"
            alt="video"
            src="https://live.verstaem.online/vrnas/img/choose/02.webp"
          />
          <FaRegPlayCircle className="home__choose-play" />
        </div>
      </div>
    </div>
  );
}

export default HomeChoose;
