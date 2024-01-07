import PageTop from "../components/PageTop";

import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

function Contact() {
  return (
    <div className="contacts">
      <PageTop title={"Contact Us"} />

      <div className="contacts__cards">
        <div className="contacts__card">
          <div className="contacts__icon-container">
            <CiMail className="contacts__icon" />
          </div>
          <h3 className="contacts__card-title">EMAIL</h3>
          <p className="contacts__card-text">Support@VRNas.com</p>
        </div>
        <div className="contacts__card">
          <div className="contacts__icon-container">
            <CiLocationOn className="contacts__icon" />
          </div>
          <h3 className="contacts__card-title">ADDRESS</h3>
          <p className="contacts__card-text">
            Tanjung Sari Street no.48, Pontianak City
          </p>
        </div>
        <div className="contacts__card">
          <div className="contacts__icon-container">
            <FiPhoneCall className="contacts__icon" />
          </div>
          <h3 className="contacts__card-title">PHONE</h3>
          <p className="contacts__card-text">+123 456 7890</p>
        </div>
      </div>

      <div className="contacts__touch">
        <div className="contacts__touch-left">
          <img
            className="contacts__touch-img"
            src="https://live.verstaem.online/vrnas/img/about/01.webp"
            alt="person"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="929"
            height="692"
            viewBox="0 0 929 692"
            fill="none"
            className="contacts__touch-svg"
          >
            <g filter="url(#filter0_f_77_3421)">
              <path
                d="M456.087 239.477C608.087 239.477 719 164.976 719 252.856C719 340.735 320.557 482 168.556 482C16.5551 482 168.556 340.735 168.556 252.856C168.556 164.976 304.086 239.477 456.087 239.477Z"
                fill="url(#paint0_linear_77_3421)"
                fillOpacity="0.8"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_77_3421"
                x="-109"
                y="0"
                width="1038"
                height="692"
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
                  result="effect1_foregroundBlur_77_3421"
                />
              </filter>
              <linearGradient
                id="paint0_linear_77_3421"
                x1="134.945"
                y1="482"
                x2="153.465"
                y2="201.739"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1CC4F9" />
                <stop offset="1" stopColor="#FE69FE" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="contacts__touch-right">
          <h4 className="contacts__touch-subtitle">CONTACT US</h4>
          <h2 className="contacts__touch-title">Get in Touch</h2>
          <p className="contacts__touch-text">
            At VRNas, we're always happy to hear from our clients and potential
            clients. Whether you have a question about our VR services, want to
            discuss a potential project, or just want to say hello, we're here
            to help.
          </p>
          <form className="contacts__touch-form">
            <input
              className="contacts__touch-input contacts__touch-first"
              type="text"
              placeholder="First Name"
            />
            <input
              className="contacts__touch-input contacts__touch-last"
              type="text"
              placeholder="Last Name"
            />
            <input
              className="contacts__touch-input contacts__touch-email"
              type="text"
              placeholder="Email"
            />
            <input
              className="contacts__touch-input contacts__touch-phone"
              type="text"
              placeholder="Phone Number"
            />
            <textarea
              className="contacts__touch-textarea"
              type="text"
              placeholder="Message"
            />
            <button type="submit" className="contacts__touch-btn">
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
