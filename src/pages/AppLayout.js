import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

import vector1 from "../img/vector1.svg";
import vector2 from "../img/vector2.svg";

function AppLayout() {
  return (
    <div className="app">
      <div className="app__vector--1-container">
        <img className="app__vector--1" src={vector1} alt="vector" />
      </div>
      <Header />
      <Outlet />
      <Footer />
      <div className="app__vector--2-container">
        <img className="app__vector--2" src={vector2} alt="vector" />
      </div>
    </div>
  );
}

export default AppLayout;
