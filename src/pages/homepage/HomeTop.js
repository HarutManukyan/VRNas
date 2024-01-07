import { FaRegPlayCircle } from "react-icons/fa";
import backgroundVector from "../../img/group10.png";
import { useNavigate } from "react-router";

function HomeTop() {
  const navigate = useNavigate();

  return (
    <div className="home__top">
      <img src={backgroundVector} alt="vector" className="background__vector" />
      <div className="home__top-container">
        <div className="home__top-left">
          <h2 className="home__top-title">
            Immerse Yourself in Virtual Reality
          </h2>
          <p className="home__top-text">
            Experience Unforgettable Events in VR. Bring your events to life
            like never before with our VR services
          </p>
          <div className="home__top-btn-container">
            <button
              onClick={() => navigate("/service")}
              className="home__top-btn button"
            >
              discover more
            </button>
          </div>
          <div className="home__top-client">
            <div className="home__top-client-images">
              <img
                className="home__top-client-img"
                alt="client"
                src="https://live.verstaem.online/vrnas/img/hero/clients/03.webp"
              />
              <img
                className="home__top-client-img"
                alt="client"
                src="https://live.verstaem.online/vrnas/img/hero/clients/02.webp"
              />
              <img
                className="home__top-client-img"
                alt="client"
                src="https://live.verstaem.online/vrnas/img/hero/clients/01.webp"
              />
            </div>
            <p className="home__top-client-text">
              <span>32k+</span> Happy Client
            </p>
            <div className="home__top-client-video-container">
              <img
                src="https://live.verstaem.online/vrnas/img/hero/02.webp"
                alt="video"
                className="home__top-client-video"
              />
              <FaRegPlayCircle className="home__top-play" />
            </div>
          </div>
        </div>
        <div className="home__top-right">
          <img
            className="home__top-img"
            alt="person"
            src="https://live.verstaem.online/vrnas/img/hero/01.webp"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="875"
            height="760"
            viewBox="0 0 875 760"
            fill="none"
            className="home__top-svg"
          >
            <g filter="url(#filter0_f_7_1848)">
              <path
                d="M535.783 246.846C675.24 246.846 777 153.72 777 263.57C777 373.419 411.438 550 271.981 550C132.524 550 271.981 373.419 271.981 263.57C271.981 153.72 396.326 246.846 535.783 246.846Z"
                fill="url(#paint0_linear_7_1848)"
                fillOpacity="0.8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_7_1848"
                x="0"
                y="0"
                width="987"
                height="760"
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
                  result="effect1_foregroundBlur_7_1848"
                />
              </filter>
              <linearGradient
                id="paint0_linear_7_1848"
                x1="241.144"
                y1="550"
                x2="272.567"
                y2="200.973"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1CC4F9" />
                <stop offset="1" stopColor="#FE69FE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
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
    </div>
  );
}

export default HomeTop;
