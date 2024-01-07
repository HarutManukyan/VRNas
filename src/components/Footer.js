import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img
          className="footer__log"
          alt="logo"
          src="https://live.verstaem.online/vrnas/img/logo.svg"
        />
      </div>
      <ul className="footer__list">
        <li className="footer__list-item">
          <FaInstagram className="footer__icon" />
        </li>
        <li className="footer__list-item">
          <FaFacebookF className="footer__icon" />
        </li>
        <li className="footer__list-item">
          <FaTwitter className="footer__icon" />
        </li>
        <li className="footer__list-item">
          <FaGithub className="footer__icon" />
        </li>
      </ul>
      <p className="footer__copyright">
        © Copyright 2023, All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
