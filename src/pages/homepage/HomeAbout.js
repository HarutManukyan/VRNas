import { FaRegPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

function HomeAbout() {
  const navigate = useNavigate();

  return (
    <div className="home__about">
      <div className="home__about-left">
        <div className="home__about-img-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="885"
            height="785"
            viewBox="0 0 885 785"
            fill="none"
            className="home__about-svg"
          >
            <g filter="url(#filter0_f_21_12645)">
              <path
                d="M415.374 249.522C564.93 249.522 674.059 149.652 674.059 267.456C674.059 385.26 282.025 574.628 132.469 574.628C-17.0865 574.628 132.469 385.26 132.469 267.456C132.469 149.652 265.819 249.522 415.374 249.522Z"
                fill="url(#paint0_linear_21_12645)"
                fillOpacity="0.5"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_21_12645"
                x="-144"
                y="0.00683594"
                width="1028.06"
                height="784.621"
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
                  result="effect1_foregroundBlur_21_12645"
                />
              </filter>
              <linearGradient
                id="paint0_linear_21_12645"
                x1="99.3989"
                y1="574.628"
                x2="133.097"
                y2="200.326"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1CC4F9" />
                <stop offset="1" stopColor="#FE69FE" />
              </linearGradient>
            </defs>
          </svg>
          <img
            className="home__about-img"
            alt="person"
            src="https://live.verstaem.online/vrnas/img/about/01.webp"
          />
        </div>
        <div className="home__about-video-container">
          <img
            className="home__about-video"
            alt="video"
            src="https://live.verstaem.online/vrnas/img/about/02.webp"
          />
          <FaRegPlayCircle className="home__about-play" />
        </div>
      </div>
      <div className="home__about-right">
        <h4 className="home__about-subtitle">ABOUT US</h4>
        <h2 className="home__about-title">
          Bring your events to life like never before with our VR services.
        </h2>
        <p className="home__about-text">
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.
        </p>
        <ul className="home__about-list">
          <li className="home__about-list-item">Cutting-Edge Technology</li>
          <li className="home__about-list-item">Versatile Applications</li>
          <li className="home__about-list-item">Affordable and Accessible</li>
        </ul>
        <div className="home__about-btn-container">
          <button
            onClick={() => navigate("/about")}
            className="home__about-btn button"
          >
            read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
