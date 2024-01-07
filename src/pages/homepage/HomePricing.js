import { useNavigate } from "react-router";

function HomePricing() {
  const navigate = useNavigate();

  return (
    <div className="home__pricing">
      <h4 className="home__pricing-subtitle">our pricing</h4>
      <h2 className="home__pricing-title">
        Affordable VR Services for Everyone
      </h2>
      <p className="home__pricing-text">
        At VRNas, we believe that everyone should have access to the benefits of
        VR. That's why we offer a range of pricing options to meet the needs of
        any budget.
      </p>

      <div className="home__pricing-content">
        <div className="home__pricing-content-texts">
          <h4 className="home__pricing-content-title">Customizable Packages</h4>
          <p className="home__pricing-content-text">
            We understand that each project is unique, so we offer customizable
            packages to ensure that you get the services you need at a price
            that works for you. Our team will work with you to create a package
            that meets your specific goals and budget.
          </p>
          <h4 className="home__pricing-content-title">
            Flexible Payment Options
          </h4>
          <p className="home__pricing-content-text">
            We offer flexible payment options to make it easy for you to get
            started with our services. We accept various payment methods,
            including credit cards, bank transfers, and PayPal, and we can also
            work with you to create a payment plan that suits your needs.
          </p>
          <h4 className="home__pricing-content-title">
            Satisfaction Guarantee
          </h4>
          <p className="home__pricing-content-text">
            We stand behind our services and are committed to ensuring that you
            are completely satisfied with the final product. If for any reason
            you are not happy with our services, we will work with you to make
            it right or provide a full refund.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1103"
          height="783"
          viewBox="0 0 1103 783"
          fill="none"
          className="home__pricing-content-svg"
        >
          <g filter="url(#filter0_f_43_1560)">
            <path
              d="M684.598 249.339C887.758 249.339 1036 149.913 1036 267.193C1036 384.474 503.453 573 300.293 573C97.1335 573 300.293 384.474 300.293 267.193C300.293 149.913 481.438 249.339 684.598 249.339Z"
              fill="url(#paint0_linear_43_1560)"
              fillOpacity="0.8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_43_1560"
              x="0"
              y="0"
              width="1246"
              height="783"
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
                result="effect1_foregroundBlur_43_1560"
              />
            </filter>
            <linearGradient
              id="paint0_linear_43_1560"
              x1="255.37"
              y1="573"
              x2="280.049"
              y2="198.97"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1CC4F9" />
              <stop offset="1" stopColor="#FE69FE" />
            </linearGradient>
          </defs>
        </svg>
        <div className="home__pricing-content-img-container">
          <img
            className="home__pricing-content-img"
            src="https://live.verstaem.online/vrnas/img/pricing/01.webp"
            alt="person"
          />
        </div>
      </div>
      <div className="home__pricing-price-container">
        <p className="home__pricing-price-subtitle">Start from</p>
        <h3 className="home__pricing-price-title">$99</h3>
        <div className="home__pricing-btn-container">
          <button
            onClick={() => navigate("/service")}
            className="home__pricing-btn button"
          >
            get started
          </button>
        </div>
        <p className="home__pricing-refund">30 Days Moneyback Guarantee</p>
      </div>
    </div>
  );
}

export default HomePricing;
