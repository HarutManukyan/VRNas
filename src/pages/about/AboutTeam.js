import { useNavigate } from "react-router";
import team1 from "../../img/team1.png";
import team2 from "../../img/team2.png";
import team3 from "../../img/team3.png";
import team4 from "../../img/team4.png";

function AboutTeam() {
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
  ];

  const navigate = useNavigate();

  return (
    <div className="about__team">
      <div className="about__team-top">
        <div className="about__team-top-texts">
          <h4 className="about__team-subtitle">OUR TEAM</h4>
          <h2 className="about__team-title">Our Professionals Team</h2>
        </div>
        <div className="about__team-btn-container">
          <button
            onClick={() => navigate("/team")}
            className="about__team-btn button"
          >
            see all
          </button>
        </div>
      </div>
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
  );
}

export default AboutTeam;
