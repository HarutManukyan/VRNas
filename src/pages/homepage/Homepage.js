import HomeAbout from "./HomeAbout";
import HomeChoose from "./HomeChoose";
import HomePartners from "./HomePartners";
import HomePricing from "./HomePricing";
import HomeService from "./HomeService";
import HomeStart from "./HomeStart";
import HomeTop from "./HomeTop";

function Homepage() {
  const width = window.outerWidth;

  return (
    <div className="home">
      <HomeTop />
      <HomeAbout />
      <HomeService />
      <HomeChoose />
      <HomeStart />
      <HomePricing />
      {width > 1000 ? <HomePartners /> : null}
    </div>
  );
}

export default Homepage;
