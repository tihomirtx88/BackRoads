import Link from "react-dom";

const Hero = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>Backroads app</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <Link href="#tours" className="btn hero-btn">
            explore tours
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
