function PageTop({ title }) {
  return (
    <div className="page__top">
      <h2 className="page__top-title">{title}</h2>
      <p className="page__top-path">
        {"Home > "}
        <span>{title}</span>
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="669"
        height="367"
        viewBox="0 0 669 367"
        fill="none"
        className="page__top-svg"
      >
        <g filter="url(#filter0_f_109_3654)">
          <path
            d="M367.984 125.931C478.418 125.931 559 85.6672 559 133.161C559 180.655 269.516 257 159.082 257C48.6476 257 159.082 180.655 159.082 133.161C159.082 85.6672 257.549 125.931 367.984 125.931Z"
            fill="url(#paint0_linear_109_3654)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_109_3654"
            x="0"
            y="0"
            width="669"
            height="367"
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
              stdDeviation="55"
              result="effect1_foregroundBlur_109_3654"
            />
          </filter>
          <linearGradient
            id="paint0_linear_109_3654"
            x1="134.662"
            y1="257"
            x2="142.122"
            y2="105.241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1CC4F9" />
            <stop offset="1" stopColor="#FE69FE" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default PageTop;
