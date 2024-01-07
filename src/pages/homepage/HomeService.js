import { useNavigate } from "react-router";

function HomeService() {
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      img: "https://live.verstaem.online/vrnas/img/service/01.svg",
      title: "VR Development",
      text: "From concept to creation, our team of VR developers will bring your vision to life.",
    },
    {
      id: 2,
      img: "https://live.verstaem.online/vrnas/img/service/02.svg",
      title: "VR Design",
      text: "Our talented VR designers will create immersive and engaging environments that will captivate your audience.",
    },
    {
      id: 3,
      img: "https://live.verstaem.online/vrnas/img/service/03.svg",
      title: "VR Consulting",
      text: "Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds your expectations.",
    },
    {
      id: 4,
      img: "https://live.verstaem.online/vrnas/img/service/04.svg",
      title: "VR Games",
      text: "We offer a wide selection of VR games that are suitable for players of all ages and skill levels.",
    },
    {
      id: 5,
      img: "https://live.verstaem.online/vrnas/img/service/05.svg",
      title: "VR Events",
      text: "Make your next event unforgettable with our VR event services.",
    },
    {
      id: 6,
      img: "https://live.verstaem.online/vrnas/img/service/06.svg",
      title: "VR Entertainment",
      text: "Create a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience to make it happen.",
    },
  ];

  return (
    <div className="home__service">
      <div className="home__service-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="613"
          height="619"
          viewBox="0 0 613 619"
          fill="none"
          className="home__service-svg"
        >
          <g filter="url(#filter0_f_24_64)">
            <path
              d="M470.856 231.566C582.521 231.566 664 177.06 664 241.354C664 305.648 371.293 409 259.628 409C147.964 409 259.628 305.648 259.628 241.354C259.628 177.06 359.192 231.566 470.856 231.566Z"
              fill="url(#paint0_linear_24_64)"
              fillOpacity="0.8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_24_64"
              x="0"
              y="0"
              width="874"
              height="619"
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
                result="effect1_foregroundBlur_24_64"
              />
            </filter>
            <linearGradient
              id="paint0_linear_24_64"
              x1="234.937"
              y1="409"
              x2="248.431"
              y2="203.949"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1CC4F9" />
              <stop offset="1" stopColor="#FE69FE" />
            </linearGradient>
          </defs>
        </svg>
        <div className="home__service-titles">
          <h4 className="home__service-subtitle">OUR SERVICE</h4>
          <h2 className="home__service-title">our service</h2>
        </div>
        <p className="home__service-text">
          We use the latest VR hardware and software to create high-quality VR
          experiences that are accessible and affordable. Our goal is to provide
          exceptional customer service and support, and our team is always
          available to answer any questions and address any concerns you may
          have.
        </p>
      </div>
      <div className="home__service-bottom">
        {cards.map(({ id, img, title, text }) => (
          <div
            onClick={() => navigate("/service")}
            className={`home__service-card home__service-card--${id}`}
            key={id}
          >
            <img className="home__service-card-img" alt="icon" src={img} />
            <h3 className="home__service-card-title">{title}</h3>
            <p className="home__service-card-text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeService;
