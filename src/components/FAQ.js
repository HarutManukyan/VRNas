import { useState } from "react";

function FAQ({ faq }) {
  const [questionId, setQuestionId] = useState(0);

  return (
    <div className="faq">
      <h4 className="faq__subtitle">FAQ</h4>
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <p className="faq__text">
        At VRNas, we want to make sure that you have all the information you
        need to make informed decisions about our VR services. Here are some of
        the most common questions we receive:
      </p>

      {faq.map(({ id, question, answer }) => (
        <div
          className="faq__item"
          key={id}
          onClick={() => setQuestionId(questionId === id ? 0 : id)}
        >
          <h3
            style={
              questionId === id
                ? { borderBottom: "1px solid grey", paddingBottom: "1rem" }
                : null
            }
            onClick={() => setQuestionId(questionId === id ? 0 : id)}
            className="faq__question"
          >
            {question}
          </h3>

          {questionId === id ? (
            <p style={{ paddingTop: "1rem" }} className="faq__answer">
              {answer}
            </p>
          ) : null}
        </div>
      ))}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1000"
        height="551"
        viewBox="0 0 1000 551"
        fill="none"
        className="faq__svg"
      >
        <g filter="url(#filter0_f_56_1970)">
          <path
            d="M436.856 197.566C548.521 197.566 630 143.06 630 207.354C630 271.648 337.293 375 225.628 375C113.964 375 225.628 271.648 225.628 207.354C225.628 143.06 325.192 197.566 436.856 197.566Z"
            fill="url(#paint0_linear_56_1970)"
            fillOpacity="0.8"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_56_1970"
            x="0"
            y="0"
            width="806"
            height="551"
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
              stdDeviation="88"
              result="effect1_foregroundBlur_56_1970"
            />
          </filter>
          <linearGradient
            id="paint0_linear_56_1970"
            x1="200.937"
            y1="375"
            x2="214.431"
            y2="169.949"
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

export default FAQ;
