import { FaRegPlayCircle } from "react-icons/fa";

function HomeStart() {
  return (
    <div className="home__start">
      <h4 className="home__start-subtitle">HOW TO GET STARTED</h4>
      <h2 className="home__start-title">
        Bringing Your Virtual Reality Dreams to Life
      </h2>
      <div className="home__start-video-container">
        <img
          className="home__start-video"
          alt="video"
          src="https://live.verstaem.online/vrnas/img/started/01.webp"
        />
        <FaRegPlayCircle className="home__start-play" />
        <h3 className="home__start-video-subtitle">VR Service</h3>
        <h3 className="home__start-video-title">How to get started</h3>
      </div>
    </div>
  );
}

export default HomeStart;
