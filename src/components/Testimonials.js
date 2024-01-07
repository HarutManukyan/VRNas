import { useState } from "react";

function Testimonials() {
  const [showId, setShowId] = useState(0);

  const testimonialsData = [
    {
      id: 1,
      img: "https://live.verstaem.online/vrnas/img/testimonial/clients/01.webp",
      name: "Robert Fox - CEO Anono",
      text: "The team was professional, responsive, and a pleasure to work with. We highly recommend VRNas for any VR needs.",
    },
    {
      id: 2,
      img: "https://live.verstaem.online/vrnas/img/testimonial/clients/02.webp",
      name: "Gerbert Dullsun - Producer",
      text: "Voluptates obcaecati ad magnam non dicta! Inventore maxime deserunt ratione?",
    },
    {
      id: 3,
      img: "https://live.verstaem.online/vrnas/img/testimonial/clients/03.webp",
      name: "Keyanu Rocks - Main charter",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      id: 4,
      img: "https://live.verstaem.online/vrnas/img/testimonial/clients/04.webp",
      name: "Ron Potter - Adminstrator",
      text: "Nam cumque, similique voluptatem aperiam vel laborum voluptatum.      ",
    },
    {
      id: 5,
      img: "https://live.verstaem.online/vrnas/img/testimonial/clients/05.webp",
      name: "Albert Socks - EVO Anono",
      text: "Laudantium quisquam dignissimos exercitationem, repudiandae eius alias.",
    },
  ];

  return (
    <div className="testimonials">
      <img
        className="testimonials__img"
        alt="person"
        src="https://live.verstaem.online/vrnas/img/testimonial/bg.webp"
      />
      {testimonialsData.map(({ id, img, name, text }) => (
        <div className="testimonials__customer" key={id}>
          <div
            className={`testimonials__customer-img-container testimonials__customer-img-container--${id}`}
          >
            <img
              onClick={() => {
                setShowId(showId == id ? 0 : id);
              }}
              className="testimonials__customer-img"
              alt="customer"
              src={img}
            />
            {showId == id ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="101"
                height="92"
                viewBox="0 0 101 92"
                fill="none"
                className="testimonials__customer-svg"
              >
                <g filter="url(#filter0_f_8917_890)">
                  <path
                    d="M55.049 25.6353C70.0523 25.6353 81 11.3925 81 28.193C81 44.9935 41.6715 72 26.6681 72C11.6648 72 26.6681 44.9935 26.6681 28.193C26.6681 11.3925 40.0457 25.6353 55.049 25.6353Z"
                    fill="url(#paint0_linear_8917_890)"
                    fillOpacity="0.8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_8917_890"
                    x="0"
                    y="0"
                    width="101"
                    height="92"
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
                      stdDeviation="10"
                      result="effect1_foregroundBlur_8917_890"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_8917_890"
                    x1="23.3506"
                    y1="72"
                    x2="30.127"
                    y2="19.054"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1CC4F9" />
                    <stop offset="1" stopColor="#FE69FE" />
                  </linearGradient>
                </defs>
              </svg>
            ) : null}
          </div>
          {showId == id ? (
            <div
              className={`testimonials__customer-content testimonials__customer-content--${id}`}
            >
              <p className="testimonials__customer-text">{text}</p>
              <h4 className="testimonials__customer-name">{name}</h4>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
