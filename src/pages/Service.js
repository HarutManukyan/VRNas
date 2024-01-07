import HomeService from "../pages/homepage/HomeService";
import HomePricing from "../pages/homepage/HomePricing";
import PageTop from "../components/PageTop";

function Service() {
  return (
    <div className="service">
      <PageTop title={"Our Service"} />

      <HomeService />

      <div className="service__stats">
        <div className="service__stats-cell">
          <h2 className="service__stats-title">HAPPY CLIENTS</h2>
          <h3 className="service__stats-text">123k+</h3>
        </div>
        <div className="service__stats-cell">
          <h2 className="service__stats-title">PROJECT COMPLETE</h2>
          <h3 className="service__stats-text">300k+</h3>
        </div>
        <div className="service__stats-cell">
          <h2 className="service__stats-title">YEARS EXPERIENCE</h2>
          <h3 className="service__stats-text">10+</h3>
        </div>
      </div>

      <HomePricing />
    </div>
  );
}

export default Service;
