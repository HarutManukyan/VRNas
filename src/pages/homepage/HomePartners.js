function HomePartners() {
  const partners = [
    {
      id: 1,
      img: "https://live.verstaem.online/vrnas/img/partners/01.webp",
    },
    {
      id: 2,
      img: "https://live.verstaem.online/vrnas/img/partners/02.webp",
    },
    {
      id: 3,
      img: "https://live.verstaem.online/vrnas/img/partners/03.webp",
    },
    {
      id: 4,
      img: "https://live.verstaem.online/vrnas/img/partners/04.webp",
    },
    {
      id: 5,
      img: "https://live.verstaem.online/vrnas/img/partners/05.webp",
    },
    {
      id: 6,
      img: "https://live.verstaem.online/vrnas/img/partners/06.webp",
    },
    {
      id: 7,
      img: "https://live.verstaem.online/vrnas/img/partners/07.webp",
    },
  ];

  return (
    <div className="home__partners">
      <h4 className="home__partners-subtitle">Our Trusted Partners</h4>
      <h2 className="home__partners-title">
        Discover the Companies We Work With
      </h2>
      <div className="home__partners-img-container">
        <img
          className="home__partners-img"
          alt="person"
          src="https://live.verstaem.online/vrnas/img/partners/bg.webp"
        />
        {partners.map(({ id, img }) => (
          <div
            className={`home__partners-logo-container home__partners-logo-container--${id}`}
            key={id}
          >
            <img className="home__partners-logo" src={img} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePartners;
