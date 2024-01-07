import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState(false);
  const [animation, setAnimation] = useState(false);

  const width = window.outerWidth;

  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${selectValue.toLowerCase()}`);
  }, [selectValue, navigate]);

  const openMenu = () => {
    setAnimation(true);
    setTimeout(() => {
      setInputValue((val) => !val);
    }, 200);
  };

  if (width < 600) {
    return (
      <div className="header__container">
        <header className="header">
          <div onClick={() => navigate("/")} className="header__logo-container">
            <img
              className="header__logo"
              src="https://live.verstaem.online/vrnas/img/logo.svg"
              alt="logo"
            />
          </div>

          <div className="header__burger ">
            <label className="header__label" for="check">
              <input
                onChange={() => {
                  openMenu();
                }}
                className="header__input"
                type="checkbox"
                checked={inputValue}
                id="check"
              />
              <span className="header__span"></span>
              <span className="header__span"></span>
              <span className="header__span"></span>
            </label>
          </div>
        </header>
        {inputValue && (
          <div className={animation ? "header__menu" : "header__menu-out"}>
            <ul className="header__menu-list">
              <Link
                onClick={() => setInputValue(false)}
                to={"/"}
                className="header__menu-list-item"
              >
                Home
              </Link>
              <Link
                onClick={() => setInputValue(false)}
                to={"/about"}
                className="header__menu-list-item"
              >
                About us
              </Link>
              <Link
                onClick={() => setInputValue(false)}
                to={"/service"}
                className="header__menu-list-item"
              >
                Service
              </Link>
              <select
                value={selectValue}
                onChange={(e) => {
                  setSelectValue(e.target.value);
                  setInputValue(false);
                  setAnimation(false);
                }}
                className="header__menu-dropdown"
              >
                <option className="header__menu-dropdown-option1">Page</option>
                <option className="header__menu-dropdown-option1">
                  Pricing
                </option>
                <option className="header__menu-dropdown-option2">Team</option>
                <option className="header__menu-dropdown-option3">
                  contacts
                </option>
                <option className="header__menu-dropdown-option3">faq</option>
                <option className="header__menu-dropdown-option3">terms</option>
                <option className="header__menu-dropdown-option3">
                  privacy
                </option>
              </select>
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <header className="header">
      <div onClick={() => navigate("/")} className="header__logo-container">
        <img
          className="header__logo"
          src="https://live.verstaem.online/vrnas/img/logo.svg"
          alt="logo"
        />
      </div>
      <ul className="header__list">
        <Link to={"/"} className="header__list-item">
          Home
        </Link>
        <Link to={"/about"} className="header__list-item">
          About us
        </Link>
        <Link to={"/service"} className="header__list-item">
          Service
        </Link>
        <select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
          id="header__dropdown"
        >
          <option class="header__dropdown-option1">Page</option>
          <option class="header__dropdown-option1">Pricing</option>
          <option class="header__dropdown-option2">Team</option>
          <option class="header__dropdown-option3">contacts</option>
          <option class="header__dropdown-option3">faq</option>
          <option class="header__dropdown-option3">terms</option>
          <option class="header__dropdown-option3">privacy</option>
        </select>
      </ul>
      <div className="header__btn-container">
        <button
          onClick={() => {
            navigate("/contacts");
          }}
          className="header__btn"
        >
          Contact us
        </button>
      </div>
    </header>
  );
}

export default Header;
