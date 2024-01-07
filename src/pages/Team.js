import PageTop from "../components/PageTop";

import team1 from "../img/team1.png";
import team2 from "../img/team2.png";
import team3 from "../img/team3.png";
import team4 from "../img/team4.png";
import team5 from "../img/team5.png";
import team6 from "../img/team6.png";

function Team() {
  const team = [
    {
      id: 1,
      name: "Bondan Prabowo",
      role: "CEO",
      img: team1,
    },
    {
      id: 2,
      name: "Bayu Aji",
      role: "VR Development",
      img: team2,
    },
    {
      id: 3,
      name: "Agung Brandon",
      role: "VR Artist",
      img: team3,
    },
    {
      id: 4,
      name: "Aril Laso",
      role: "UI / UX Designer",
      img: team4,
    },
    {
      id: 5,
      name: "Aldo Boy",
      role: "3D Designer",
      img: team5,
    },
    {
      id: 6,
      name: "Beni Barak",
      role: "3D Artist",
      img: team6,
    },
  ];

  return (
    <div className="team">
      <PageTop title={"Our Team"} />

      <h4 className="team__subtitle">OUR TEAM</h4>
      <h2 className="team__title">Meet Our Amazing Team</h2>
      <div className="team__cards">
        <div className="about__team">
          <div className="about__team-cards">
            {team.map(({ id, name, role, img }) => (
              <div key={id} className="about__team-card">
                <img className="about__team-img" alt="team mate" src={img} />
                <h4 className="about__team-name">{name}</h4>
                <p className="about__team-role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="team__stats ">
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
      </div>
    </div>
  );
}

export default Team;
