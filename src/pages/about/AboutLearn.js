import { FaRegPlayCircle } from "react-icons/fa";

function AboutLearn() {
  return (
    <div className="about__learn">
      <div className="about__learn-left">
        <h4 className="about__learn-subtitle">ABOUT US</h4>
        <h2 className="about__learn-title">
          Bringing Your Vision to Life: Learn About VRNas
        </h2>
        <p className="about__learn-text">
          VRNas is a leading provider of VR services for education,
          entertainment, architecture, and events. Our mission is to bring the
          power of virtual reality to everyone, allowing them to explore new
          worlds, learn in new ways, and experience events in a whole new light.{" "}
          <br />
          Our team consists of experienced VR developers, designers, and
          technicians who are passionate about VR and dedicated to delivering
          the highest quality work. We use the latest VR hardware and software
          to create immersive, interactive experiences that are tailored to your
          specific needs. <br /> From initial consultation to final delivery, we
          are committed to providing exceptional customer service. Our goal is
          to ensure that you are completely satisfied with every aspect of your
          VR experience.
        </p>
      </div>
      <div className="about__learn-img-container">
        <img
          className="about__learn-img"
          alt="person"
          src="https://live.verstaem.online/vrnas/img/pricing/01.webp"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="813"
          height="786"
          viewBox="0 0 813 786"
          fill="none"
          className="about__learn-svg"
        >
          <g filter="url(#filter0_f_56_1537)">
            <path
              d="M559.984 249.789C709.801 249.789 819.12 149.745 819.12 267.755C819.12 385.764 426.402 575.463 276.585 575.463C126.768 575.463 276.585 385.765 276.585 267.755C276.585 149.745 410.167 249.789 559.984 249.789Z"
              fill="url(#paint0_linear_56_1537)"
              fill-opacity="0.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_56_1537"
              x="0"
              y="0.206055"
              width="1029.12"
              height="785.257"
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
                result="effect1_foregroundBlur_56_1537"
              />
            </filter>
            <linearGradient
              id="paint0_linear_56_1537"
              x1="243.457"
              y1="575.463"
              x2="277.214"
              y2="200.508"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1CC4F9" />
              <stop offset="1" stop-color="#FE69FE" />
            </linearGradient>
          </defs>
        </svg>
        <div className="about__learn-video-container">
          <img
            className="about__learn-video"
            alt="video"
            src="https://live.verstaem.online/vrnas/img/hero/02.webp"
          />
          <FaRegPlayCircle className="about__learn-play" />
        </div>
      </div>
    </div>
  );
}

export default AboutLearn;
